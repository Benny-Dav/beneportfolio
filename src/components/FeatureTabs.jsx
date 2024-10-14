import T from "../constants/index";
const Tabs =() =>{
    return(
        <div className="h-[10vh] flex justify-between w-[60%] ml-[auto] mr-[auto] mt-[-0.3em] ">
            {
                T.TABS.map((tabs, index) => {
                    console.log(`${index}:${tabs.title}`);
                    return(
                        <div key={index} className="flex flex-col gap-y-2 bg-[white] w-[30%] h-[100%] pl-4 border shadow-sm rounded-lg">
                            <span>icon</span>
                            <h3>{tabs.title}</h3>
                            
                        </div>
                    )
                })
            }
        </div>
    );
}
export default Tabs;
