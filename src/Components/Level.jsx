
export default function Level({val}) {
  const skils=val.map(element => {
    if(element===1){
      return <div class="div1"></div>
    }else{
      return <div class="div2"></div>
    }
  });
  return (
        <div class="level">
            {skils}
        </div>
  );
}
