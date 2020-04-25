import React from 'react'

class SearchBar extends React.Component {
    state = { term: '' }

    onInputHandler = event => {
        this.setState({term: event.target.value})
    }

    onSubmitHandler = e => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSubmitHandler} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term} 
                            onChange={this.onInputHandler}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar