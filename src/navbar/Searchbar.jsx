
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';

import Cards from '../sincronia/Cards';
import { useForm } from '../hooks/useForm';
import { SearchProducthelper } from '../helpers/SearchProducthelper';



export const Searchbar = () => {

  const navigate = useNavigate(); /* calling to the use navigate hook wich allows to update a path route  */
  const location = useLocation(); /* calling to the use location hook wich allows to  call's the path on the route  */

  const { q = '' } = queryString.parse(location.search); /* this is calling a quey string from the library with the samne name wich allows make and edit the path using a library and parsing it out  */

  const [values, handleInputChange ] = useForm({ searchText: q }); /* this is a custom hook caloling wich accept value and a function (../hooks/useForm) */
  
  const { searchText } = values; /* a destructiring of the value state coming from the custom hook called 1 row above this one */
 
  const propductFiltered = SearchProducthelper(q) /*this const is using a hook called use memo in order to avoid render the componend matching with a external helper called SearchProducthelper wich allows to filter the info that is matching with the 'q' queried 5 rows above   */

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`)
  }; /* this function call's the input and replace it out using the navigate hook   */

  

  return (
    <>
     
      <div>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder="buscar producto"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleInputChange}
          />
          <button type="submit">
            search...
          </button>
        </form>
      </div>

      <div>
        {
          (q === '')
            ? <div></div>
            : (propductFiltered.length === 0)
            && <div> no  hay resultados: {q}</div>
        }

        {
          propductFiltered.map(product => (
            < Cards
            searchText = {searchText}
              key={product.id}
              {...product}
            />
          )
          )
        }

      </div>
    </>
  )
}