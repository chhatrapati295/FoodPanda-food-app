export function filterData (searchText,allRestaurents){
    return (allRestaurents.filter((restaurent)=>{
        return restaurent?.data?.name.toLowerCase()?.includes(searchText.toLowerCase())
    }))
  }