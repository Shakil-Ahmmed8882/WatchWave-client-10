import useAuth from "../Utils/AuthHelper";


const Series = () => {
      const {loading,brands,categories} = useAuth()

      console.log(loading)
      // const {loading} = useAuth()
      // console.log(loading)
      // console.log(Brands.fantasy)
      const array = Object.values(brands)


      if(loading){
            return <p>Loading....</p>
      }

      const imgs  = 'https://th.bing.com/th/id/R.35fe07063a8599f1fb44959bf9d2423d?rik=O4VQ2mjjntcajQ&pid=ImgRaw&r=0'

      
      // console.log(array)
      return (
            <div className="grid grid-cols-3 gap-3">
                  {
                        array?.map((category)=> <div className="relative rounded-lg" key={category._id}>
                              <div className="overlay"></div>
                              <img src={imgs} alt="" />
                        </div>)
                  }
            </div>
      )
};

export default Series;