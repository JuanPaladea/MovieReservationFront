const ReservationComponent = ( { reservation }: any) => {

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Reservation {reservation.reservation_id} </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full mx-auto">
            <div className="my-5 flex flex-col items-center text-center">
              <img alt="team" className="flex-shrink-0 rounded-lg w-full object-cover object-center mb-4" src={reservation.thumbnails} />
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Title</h2>
                <p className="leading-relaxed text-base">{reservation.title}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Show Date</h2>
                <p className="leading-relaxed text-base">{new Date(reservation.show_date).toLocaleDateString('en-GB')}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Show Time</h2>
                <p className="leading-relaxed text-base">{reservation.show_time}</p>
              </div>
            </div>  
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Price</h2>
                <p className="leading-relaxed text-base">{reservation.price}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Row Number</h2>
                <p className="leading-relaxed text-base">{reservation.row_number}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Seat Number</h2>
                <p className="leading-relaxed text-base">{reservation.seat_number}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Reservation Date</h2>
                <p className="leading-relaxed text-base">{new Date(reservation.reservation_date).toLocaleDateString('en-GB')}</p>
              </div>
            </div>
            <div className="my-5 flex flex-col items-center text-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Reservation Status</h2>
                <p className="leading-relaxed text-base">{reservation.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReservationComponent;