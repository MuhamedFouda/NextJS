// "use server"
import Link from 'next/link';
const getPredectedAge=async(name)=>{
    const res= await fetch(`https://api.nationalize.io/?name=${name}`)
    return res.json();
}
export default async function page({params}) {
    const userData=getPredectedAge(params.name)
    const [name]=await Promise.all([userData])
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1>Personal InFo</h1>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p>Your Name : {name?.name}</p>
        <p>Name Count : {name?.count}</p>
        <div className="flex flex-col justify-around items-center mt-10">
            
                    <div className="w-auto flex flex-row justify-around items-center gap-4">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                     <th scope="col" className="px-6 py-3"> Country</th>
                                    <th scope="col" className="px-6 py-3">probability</th>
                            </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800">
                                {
                                    name.country.map((country)=>{
                                        console.log(name.country[0])
                                        return(
                                            <tr>
                                                <td scope="col" className="px-6 py-3">{country.country_id}</td>
                                                <td scope="col" className="px-6 py-3">{country.probability}</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                            
                        </table> 
                    </div>
                        <Link href="/">
                        <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 mt-5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Back Home</button>
                        </Link>
        </div>
      </div>

    </div>
  )
}
