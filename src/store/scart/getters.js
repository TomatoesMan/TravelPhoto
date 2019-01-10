import state from "./state"
export default{
	result(){
        let scartNum=1,scartPrice=0,ary=[];
        state.scartList.map((item)=>{
            if(item.flag){
               // console.log(item)
                ary.push(item)
                scartPrice += item.comboPrice
                //console.log(ary)
            }
        })
        return {
            scartNum,
            scartPrice,
            ary
        }
        //console.log(scartPrice)
    }
}