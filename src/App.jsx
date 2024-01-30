import './App.css';
import  headerimg  from './assets/images/image-omelette.jpeg'

function App() {

  const Preparation = [
    {head:'Total',txt:': Approximately 10 minutes'},
    {head:'Preparation',txt:': 5 minutes'},
    {head:'Cooking',txt:': 5 minutes'}
  ]

  const Instructions = [
    {
      head:'Beat the eggs',
      txt:": In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed.You can add a tablespoon of water or milk for a fluffier texture."
    },
    {
      head:'Heat the pan',
      txt:": Place a non-stick frying pan over medium heat and add butter or oil."
    },
    {
      head:'Cook the omelette',
      txt:": Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface."
    },
    {
      head:'Add fillings (optional)',
      txt:": When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette."
    },
    {
      head:'Fold and serve',
      txt:": As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate."
    },
    {
      head:'Enjoy',
      txt:": Serve hot, with additional salt and pepper if needed.",
      margin:true
    }
  ]

  const Nutrition = [
    {name:"Calories",cal:"277kcal"},
    {name:"Carbs",cal:"0g"},
    {name:"Protein",cal:"20g"},
    {name:"Fat",cal:"22g"}
  ]



  return (
    <>
      <div className="h-full flex flex-col gap-2 items-center justify-center bg-[#f3e6d8] transition-all ease duration-300">
        <div className='md:w-[650px] lg:w-[750px] sm:w-full md:p-6 sm:p-0 sm:rounded-none bg-white md:rounded-3xl'>
            <img src={headerimg} alt="" className='h-full md:rounded-3xl sm:rounded-none object-cover'/>
          <div className='p-5'>
            <div className='p-4'>
                <h1 className='my-5  text-3xl  tracking-wide text-wrap  font-bold'>
                  Simple Omelette Recipe
                </h1>
                <p className='mt-3 text-pretty '>
                  An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked 
                  to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                </p>
                <div className='w-full p-3 pt-5 mt-5 bg-[#fff5fa]'>
                  <h2 className='text-lg ml-5 font-bold text-[#7b284f]'>Preparation time</h2>
                  <ul className='p-5 ml-5 text-sm flex flex-col gap-3 list-disc text-[#854632]'>
                    
                    {Preparation?.map((pre,index) => (
                       <li key={index}>
                        <span className='font-bold ml-4'>{pre?.head}</span>{pre?.txt}
                     </li>
                    ))}

                  </ul>
                </div>
                <div className=' w-full mb-5  p-5'>
                    <h2 className='text-3xl mb-5 font-bold text-[#854632]'>Ingredients</h2> 
                    <ul className='flex flex-col gap-3 list-disc text-[#854632]'>
                      <li>2-3 large eggs</li>
                      <li>Salt, to taste</li>
                      <li>Pepper, to taste</li>
                      <li>1 tablespoon of butter or oil</li>
                      <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </div>
                <div className='w-full mb-5 p-4  border-b-2 border-b-[#e4ded8]'>
                  <h2 className='text-3xl mb-5 font-bold text-[#854632]'>
                    Instructions
                  </h2>
                  <ul className='flex flex-col gap-3 list-decimal text-[#302d2c]'>

                  {Instructions?.map((ins,index) => (
                    <li className={`font-bold ${ins?.margin && "mb-5"}`} key={index}>
                      <p className='ml-5 font-normal'>
                      <span className='font-bold'>{ins?.head}</span>
                        {ins?.txt}
                      </p>
                    </li>
                    ))}

                  </ul>
                </div>
                <div className='w-full p-4'>
                  <h2 className='text-3xl font-bold'>Nutrition</h2>
                  <p className='my-5'>
                    The table below shows nutritional values per serving without the additional fillings.
                  </p>
                  <div className='w-full  p-4 mb-5'>
                  <table className='table table-auto w-full'>
                    {Nutrition?.map((nut,index) => (

                      <tr className='text-lg border-b-2 border-b-[#e4ded8] w-[20px] hover:bg-[#f3e6d8] cursor-pointer' key={index} >
                          <td className='font-normal text-md  px-[2rem] py-2'>{nut?.name}</td>
                          <td  className='font-extrabold text-lg'>{nut?.cal}</td>
                      </tr>

                    ))}
                  </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
          
          <div className='text-md mx-5  text-center text-wrap'>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" className='font-bold text-[#854632]' target="_blank">Frontend Mentor</a>. 
            Coded by <a  href="https://github.com/ZENSE-THAI" className='font-bold text-[#854632] '>ZENSE</a>.
          </div>
      </div>




    </>
  )
}

export default App
