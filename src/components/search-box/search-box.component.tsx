// import { Component } from 'react';
import "./search-box.styles.css"
import { ChangeEvent } from 'react';
// import { ChangeEventHandler } from 'react';

type SeachBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string;
// }


// interface IChangeHandlerProps {
//   onChangeHandler: ChangeEventHandler<HTMLInputElement>;
// }

const SearchBox = (props: SeachBoxProps) => {
  const { className, onChangeHandler, placeholder } = props
  return (
    <input
      className={`search-box ${className}`} type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  )
}

// class SearchBox extends Component {

//     render() {
//         return (
//             <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />
//         )
//     }

// }



export default SearchBox;