import { useParams } from "react-router-dom";
import useAuth from "../../Utils/AuthHelper";


const Details = () => {
      const {name} = useParams()
      const {brands} = useAuth()

      brands.forEach(brand => {
            // console.log(brand.brand.projects[0])
            const brandValueArray = Object.values(brand)

            brandValueArray.forEach(value => {
                  value.forEach(project => {
                        
                  })
            })
      })
      return (
            <div>
                  <h1 className="text-5xl font-bold">Details</h1>
            </div>
      );
};

export default Details;