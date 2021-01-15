import React,{useState} from 'react';

const SearchBar = ({onFormSubmit}) => {
    const[term, setTerm] = useState('');



// used to enter in the input field 
   const onInputChange =event => {
       setTerm(event.target.value);
    };

   const onSubmit = event => {
    event.preventDefault(); //prevent from refeshing the page

    onFormSubmit(term);
};
return (
    <div className="search-bar ui segment">
        <form onSubmit={onSubmit} className="ui form">
        <div className="field">
            <label><b><i>Search For a Video</i></b></label>
            <input type="text"
             value={term} 
             onChange={onInputChange}
             />
        </div>
        </form>
    </div>
);

};

export default SearchBar;







