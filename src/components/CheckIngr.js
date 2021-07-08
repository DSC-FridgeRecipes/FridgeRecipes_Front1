import React, {useEffect, useState, useQuery} from "react";
import { GET_ALL_MY_INGREDIENTS } from "../graphql/Query";

const CheckIngr = () => {

   // eslint-disable-next-line react-hooks/rules-of-hooks
   const { loading, error, data } = useQuery(GET_ALL_MY_INGREDIENTS, {
   variables: { userId : '60d499a79fa1ed5f303b77a7' }, //임의의 userId 사용
     });

  const [checkIngrs, setCheckIngrs] = useState([]);

  function checkHandler(checked, ingredient){
    if(checked){ //체크된 것을 배열에 넣기
      setCheckIngrs([...checkIngrs, ingredient]);
    }
    else{ //체크 해제
      setCheckIngrs(checkIngrs.filter( o=> o !== ingredient));
    }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    console.log(checkIngrs)
  }, [checkIngrs]);

  return(
    <div>
       
    { loading && (
        <p>loading...</p>
    )}
    { error && (
        <p>{`Error! ${error}`}</p>
    )}
    { data && data.getAllMyIngredients.map((ingredient, idx) => (
        <div>
        <input
        type="checkbox" 
        onChange={(e)=>{
        checkHandler(e.currentTarget.checked, ingredient)}}
        checked={checkIngrs.indexOf(ingredient) ? true : false}
        />  {`${ingredient}`}
        
        </div>

    ))}
    { !data && (
        <p>저장된 재료가 없습니다. 추가해주세요!</p>
    )}
</div>


  );

}

export default CheckIngr;