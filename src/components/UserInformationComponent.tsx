import { UserType } from "../types/types"

const UserInformationComponent = ({user}: {user: UserType}) => {

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -m-2 mx-auto">
        <div className="p-2 lg:w-1/4 md:w-1/2 w-full mx-auto">
          <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
            <div className="flex-grow">
              <h2 className="text-gray-900 title-font font-medium">{user.email} </h2>
              <p className="text-gray-700"> {user.role} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInformationComponent