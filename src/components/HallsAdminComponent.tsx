import AddHallFormComponent from "./AddHallFormComponent"

const HallAdminComponent = ({halls}: any) => {
  return (
    <>
      <AddHallFormComponent />
      <div className="flex flex-wrap -m-2">
        {halls.map((hall: any) => (
          <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium"> {hall.name} </h2>
                <p className="text-gray-700">Rows: {hall.total_rows} </p>
                <p className="text-gray-500">Seats per row: {hall.seats_per_row} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default HallAdminComponent;