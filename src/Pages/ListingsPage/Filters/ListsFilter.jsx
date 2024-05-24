
const ListsFilter = () => {
  return (
    <div >
    <div className="flex flex-col">
      <div dir="auto" className="v-select vs--single vs--searchable">
        <div id="vs15__combobox" className="vs__dropdown-toggle" role="combobox" aria-expanded="false" aria-owns="vs15__listbox" aria-label="Search for option">
          <div className="vs__selected-options"><input className="vs__search" placeholder="Search or Create a new list" aria-autocomplete="list" aria-labelledby="vs15__combobox" aria-controls="vs15__listbox" type="search" autoComplete="off" /></div>
          <div className="vs__actions"><button type="button" className="vs__clear" title="Clear Selected" aria-label="Clear Selected" style={{display: 'none'}}><svg xmlns="http://www.w3.org/2000/svg" width={10} height={10}>
                <path d="M6.895455 5l2.842897-2.842898c.348864-.348863.348864-.914488 0-1.263636L9.106534.261648c-.348864-.348864-.914489-.348864-1.263636 0L5 3.104545 2.157102.261648c-.348863-.348864-.914488-.348864-1.263636 0L.261648.893466c-.348864.348864-.348864.914489 0 1.263636L3.104545 5 .261648 7.842898c-.348864.348863-.348864.914488 0 1.263636l.631818.631818c.348864.348864.914773.348864 1.263636 0L5 6.895455l2.842898 2.842897c.348863.348864.914772.348864 1.263636 0l.631818-.631818c.348864-.348864.348864-.914489 0-1.263636L6.895455 5z">
                </path>
              </svg></button><svg xmlns="http://www.w3.org/2000/svg" width={14} height={10} role="presentation" className="vs__open-indicator">
              <path d="M9.211364 7.59931l4.48338-4.867229c.407008-.441854.407008-1.158247 0-1.60046l-.73712-.80023c-.407008-.441854-1.066904-.441854-1.474243 0L7 5.198617 2.51662.33139c-.407008-.441853-1.066904-.441853-1.474243 0l-.737121.80023c-.407008.441854-.407008 1.158248 0 1.600461l4.48338 4.867228L7 10l2.211364-2.40069z">
              </path>
            </svg>
            <div className="vs__spinner" style={{display: 'none'}}>Loading...</div>
          </div>
        </div>
        <ul id="vs15__listbox" role="listbox" style={{display: 'none', visibility: 'hidden'}} />
      </div>{/**/}
      <div className="md:flex md:justify-end">{/**/}{/**/}{/**/}<button className="button mb-4 md:mb-0 w-full flex justify-center items-center md:w-auto" disabled> Save
          List {/**/}</button></div>
    </div>
  </div>
  )
}

export default ListsFilter
