/* eslint-disable react/prop-types, react/no-unescaped-entities */
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, CalendarDays, Check, ChevronLeft, ChevronRight, Clock3,
  Heart, LoaderCircle, LockKeyhole, ShieldCheck,
} from 'lucide-react';
import { initializeSponsorship, verifySponsorship } from '../services/paystack';
import './BookADate.css';

const getHourlyRate = (duration) => duration < 2 ? 200 : 150;
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const TIME_POINTS = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];
const BOOKING_STORAGE_KEY = 'book-a-date-pending-booking';

const loadPendingBooking = () => {
  try {
    const booking = JSON.parse(sessionStorage.getItem(BOOKING_STORAGE_KEY));
    return booking?.date ? booking : null;
  } catch {
    return null;
  }
};

const formatDate = (date) => new Intl.DateTimeFormat('en-GB', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
}).format(date);

function DateHeader({ step, onBack }) {
  return <>
    <div className="date-progress" aria-hidden="true"><span style={{ width: `${(step / 3) * 100}%` }} /></div>
    <header className="date-header"><div className="date-header__inner">
      {step > 1
        ? <button className="date-back" onClick={onBack}><ArrowLeft size={21} /> Back</button>
        : <Link className="date-back" to="/"><ArrowLeft size={21} /> Back to portfolio</Link>}
      {step > 1 && <Link className="date-portfolio" to="/">Back to portfolio</Link>}
    </div></header>
  </>;
}

function Calendar({ selectedDate, setSelectedDate, cursor, setCursor }) {
  const year = cursor.getFullYear();
  const month = cursor.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells = [...Array(firstDay).fill(null), ...Array.from({ length: days }, (_, index) => index + 1)];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const firstAvailableWeek = new Date(today);
  firstAvailableWeek.setDate(today.getDate() - today.getDay() + 7);

  const unavailable = (day) => {
    const date = new Date(year, month, day);
    const weekday = date.getDay();
    const isMondayToWednesday = weekday >= 1 && weekday <= 3;
    return date < firstAvailableWeek || isMondayToWednesday;
  };
  const moveMonth = (amount) => setCursor(new Date(year, month + amount, 1));

  return <section className="calendar-card" aria-label={`${MONTHS[month]} ${year} calendar`}>
    <div className="calendar-title"><h2>{MONTHS[month]} {year}</h2><div>
      <button aria-label="Previous month" onClick={() => moveMonth(-1)}><ChevronLeft /></button>
      <button aria-label="Next month" onClick={() => moveMonth(1)}><ChevronRight /></button>
    </div></div>
    <div className="calendar-grid">
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <span className="weekday" key={`${day}-${index}`}>{day}</span>)}
      {cells.map((day, index) => day ? <button
        key={day}
        disabled={unavailable(day)}
        aria-label={`${MONTHS[month]} ${day}, ${year}${unavailable(day) ? ', unavailable' : ''}`}
        className={selectedDate?.getDate() === day && selectedDate?.getMonth() === month && selectedDate?.getFullYear() === year ? 'selected' : ''}
        onClick={() => setSelectedDate(new Date(year, month, day))}
      >{day}</button> : <span key={`empty-${index}`} />)}
    </div>
  </section>;
}

function DateStep({ selectedDate, setSelectedDate, cursor, setCursor, next }) {
  return <main className="date-main date-main--narrow">
    <section className="date-intro step-title"><p className="eyebrow">STEP 1 OF 3</p><h1>Choose our special day.</h1></section>
    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} cursor={cursor} setCursor={setCursor} />
    {selectedDate && <div className="selection-note"><ShieldCheck size={22} /><strong>{formatDate(selectedDate)} — I can't wait! ♡</strong></div>}
    <button className="date-primary" disabled={!selectedDate} onClick={next}>Let's pick a time <Heart size={24} /></button>
  </main>;
}

function TimeStep({ selectedDate, startTime, setStartTime, endTime, setEndTime, next }) {
  const startIndex = TIME_POINTS.indexOf(startTime);
  const endIndex = TIME_POINTS.indexOf(endTime);
  const duration = startIndex >= 0 && endIndex > startIndex ? endIndex - startIndex : 0;
  const updateStart = (event) => {
    const value = event.target.value;
    setStartTime(value);
    if (TIME_POINTS.indexOf(endTime) <= TIME_POINTS.indexOf(value)) setEndTime('');
  };

  return <main className="date-main date-main--time">
    <div className="step-title"><p className="eyebrow">STEP 2 OF 3</p><h1>How long will you have me?</h1></div>
    <section className="time-card">
      <div className="selected-date-meta"><CalendarDays /><span>{formatDate(selectedDate)}</span></div>
      <p className="time-help">Choose when our time together begins and ends.</p>
      <div className="time-pickers">
        <label><span>Start time</span><select value={startTime} onChange={updateStart}><option value="">Select</option>{TIME_POINTS.slice(0, -1).map((time) => <option key={time} value={time}>{time}</option>)}</select></label>
        <label><span>End time</span><select value={endTime} onChange={(event) => setEndTime(event.target.value)} disabled={!startTime}><option value="">Select</option>{TIME_POINTS.slice(1).map((time, index) => <option key={time} value={time} disabled={index + 1 <= startIndex}>{time}</option>)}</select></label>
      </div>
      {duration > 0 && <div className="time-summary"><Clock3 /><span><small>Our time together</small><strong>{startTime} – {endTime} · {duration} {duration === 1 ? 'hour' : 'hours'}</strong></span></div>}
    </section>
    <button className="date-primary date-primary--wide" disabled={!duration} onClick={next}>Continue</button>
  </main>;
}

function SponsorshipStep({ booking, reveal, setReveal, proceed, changeDate, changeTime }) {
  const total = booking.duration * getHourlyRate(booking.duration);
  return <main className="date-main date-main--sponsor">
    <section className="sponsor-card">
      {!reveal && <div className="step-title"><p className="eyebrow">STEP 3 OF 3</p><h1>Let me show up at my best.</h1></div>}
      {!reveal ? <>
        <p className="sponsor-lead">Your sponsorship will help me get ready with confidence, travel safely to you, and make space for us by covering the commitments I'll be stepping away from.</p>
        <p className="sponsor-lead mb-4">It means I can arrive relaxed, fully present, and ready to give our time the attention it deserves. 💖💖💖</p>
        <button className="date-primary" onClick={() => setReveal(true)}>Next</button>
      </> : <>
        <div className="sponsorship-cost">
          <span>Preparation & safe commute sponsorship 💖💖💖</span><strong>GH₵{total.toFixed(2)}</strong>
        </div>
        <div className="sponsor-details">
          <div><CalendarDays /><span><small>Date</small><strong>{formatDate(booking.date)}</strong></span><button onClick={changeDate}>Edit</button></div>
          <div><Clock3 /><span><small>Time</small><strong>{booking.start} – {booking.end} GMT</strong></span><button onClick={changeTime}>Edit</button></div>
        </div>
        <button className="date-primary" onClick={proceed}>Proceed <LockKeyhole size={20} /></button>
        <p className="secure-note"><ShieldCheck /> Handled securely by Paystack</p>
      </>}
    </section>
  </main>;
}

function PaystackModal({ booking, close }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const total = booking.duration * getHourlyRate(booking.duration);
  const complete = async () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) { setError('Enter a valid email address.'); return; }
    setLoading(true);
    setError('');
    try {
      const pendingBooking = { ...booking, date: booking.date.toISOString(), email };
      sessionStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(pendingBooking));
      const { authorizationUrl } = await initializeSponsorship({
        email,
        date: booking.date.toISOString().slice(0, 10),
        start: booking.start,
        end: booking.end,
      });
      window.location.assign(authorizationUrl);
    } catch (requestError) {
      setError(requestError.message);
      setLoading(false);
    }
  };
  return <div className="payment-overlay" role="dialog" aria-modal="true" aria-labelledby="paystack-title"><div className="payment-modal">
    {loading ? <><LoaderCircle className="spin" size={42} /><h2 id="paystack-title">Opening Paystack…</h2><p>Please wait while secure checkout is prepared.</p></>
      : <><div className="payment-lock"><LockKeyhole /></div><p className="eyebrow">PAYSTACK</p><h2 id="paystack-title">Sponsor my preparation with GH₵{total.toFixed(2)} 💖</h2><p>Paystack needs your email to complete the sponsorship securely. You're almost there.</p><label className="paystack-email">Email address<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" autoComplete="email" /></label>{error && <p className="payment-error" role="alert">{error}</p>}<button className="date-primary" onClick={complete}>Continue</button><button className="modal-cancel" onClick={close}>Go back</button></>}
  </div></div>;
}

function VerificationOverlay({ error, retry }) {
  return <div className="payment-overlay" role="status"><div className="payment-modal">
    {error ? <><h2>We couldn't confirm it yet.</h2><p>{error}</p><button className="date-primary" onClick={retry}>Check again</button></> : <><LoaderCircle className="spin" size={42} /><h2>Confirming your sponsorship…</h2><p>Please don't close this page while Paystack verifies it.</p></>}
  </div></div>;
}

function Success({ booking }) {
  return <main className="success-main"><div className="success-icon"><Heart /><span><Check /></span></div><p className="eyebrow">DATE CONFIRMED ♡</p><h1>It's a date! ♡</h1><p className="success-thanks">Thank you💖</p><p>Your sponsorship is confirmed and our date is all set.</p><em>I'll be counting down the hours.</em><section>
    <div><CalendarDays /><span><small>Date & time</small><strong>{formatDate(booking.date)} · {booking.start} – {booking.end}</strong></span></div>
    <div><Clock3 /><span><small>Duration</small><strong>{booking.duration} {booking.duration === 1 ? 'hour' : 'hours'} together</strong></span></div>
  </section><p className="success-signoff">Until then, take care. ♡</p><Link className="success-link" to="/">Back to portfolio</Link></main>;
}

export default function BookADate() {
  const today = new Date();
  const [restoredBooking] = useState(loadPendingBooking);
  const [step, setStep] = useState(restoredBooking ? 3 : 1);
  const [selectedDate, setSelectedDate] = useState(() => restoredBooking ? new Date(restoredBooking.date) : null);
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [startTime, setStartTime] = useState(restoredBooking?.start || '');
  const [endTime, setEndTime] = useState(restoredBooking?.end || '');
  const [revealCost, setRevealCost] = useState(Boolean(restoredBooking));
  const [paystackOpen, setPaystackOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [verification, setVerification] = useState({ loading: false, error: '' });
  const booking = useMemo(() => {
    const startIndex = TIME_POINTS.indexOf(startTime);
    const endIndex = TIME_POINTS.indexOf(endTime);
    return { date: selectedDate, start: startTime, end: endTime, duration: startIndex >= 0 && endIndex > startIndex ? endIndex - startIndex : 0 };
  }, [selectedDate, startTime, endTime]);
  const goTo = (nextStep) => { setStep(nextStep); window.scrollTo({ top: 0, behavior: 'smooth' }); };

  const verifyCallback = async () => {
    const params = new URLSearchParams(window.location.search);
    const reference = params.get('reference') || params.get('trxref');
    if (!reference) return;
    setVerification({ loading: true, error: '' });
    try {
      const result = await verifySponsorship(reference);
      if (result.booking?.date) {
        setConfirmedBooking({
          ...result.booking,
          date: new Date(`${result.booking.date}T00:00:00`),
        });
      }
      sessionStorage.removeItem(BOOKING_STORAGE_KEY);
      window.history.replaceState({}, '', '/book-a-date');
      setVerification({ loading: false, error: '' });
      setSuccess(true);
      window.scrollTo(0, 0);
    } catch (requestError) {
      setVerification({ loading: false, error: requestError.message });
    }
  };

  useEffect(() => { verifyCallback(); }, []); // Verify only the Paystack callback received on page load.

  useEffect(() => {
    const previousHtmlOverflow = document.documentElement.style.overflowY;
    const previousBodyOverflow = document.body.style.overflowY;
    document.documentElement.style.overflowY = 'auto';
    document.body.style.overflowY = 'auto';
    return () => {
      document.documentElement.style.overflowY = previousHtmlOverflow;
      document.body.style.overflowY = previousBodyOverflow;
    };
  }, []);

  if (success) return <div className="date-page date-page--success"><DateHeader step={3} onBack={() => setSuccess(false)} /><Success booking={confirmedBooking || booking} /></div>;
  return <div className="date-page"><DateHeader step={step} onBack={() => goTo(step - 1)} />
    {step === 1 && <DateStep selectedDate={selectedDate} setSelectedDate={setSelectedDate} cursor={cursor} setCursor={setCursor} next={() => goTo(2)} />}
    {step === 2 && <TimeStep selectedDate={selectedDate} startTime={startTime} setStartTime={setStartTime} endTime={endTime} setEndTime={setEndTime} next={() => { setRevealCost(false); goTo(3); }} />}
    {step === 3 && <SponsorshipStep booking={booking} reveal={revealCost} setReveal={setRevealCost} proceed={() => setPaystackOpen(true)} changeDate={() => goTo(1)} changeTime={() => goTo(2)} />}
    {paystackOpen && <PaystackModal booking={booking} close={() => setPaystackOpen(false)} />}
    {verification.loading && <VerificationOverlay />}
    {verification.error && <VerificationOverlay error={verification.error} retry={verifyCallback} />}
  </div>;
}
