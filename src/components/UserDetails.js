function Users({ userId }) {
  const userDetails = JSON.parse(localStorage.getItem("user"));
  const user = userDetails.find((item) => item.id === userId);
  localStorage.setItem("userId", JSON.stringify(user));

  return (
    <div className="flex items-center justify-between ">
      {/* ********************************* User Details  ****************************************** */}
      <div className="border-r gray-500">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user.profilepicture}
            alt="User Avatar"
            className="w-36 h-36 rounded-full"
          />
          <h2 className="text-2xl font-semibold mb-4">{user.name}</h2>
        </div>
        <div className="space-y-2 mx-2">
          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal">Username: </span>
            {user.name}
          </p>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> e-mail: </span>
            {user.email}
          </p>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> Phone: </span>
            {user.phone}
          </p>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> website:</span>
            {user.website}
          </p>
        </div>

        <div className="mt-10 border-t border-gray-200 mr-3">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold my-2">Company</h3>
          </div>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> name:</span>
            {user.company.name}
          </p>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> catchPhrase:</span>
            {user.company.catchPhrase}
          </p>

          <p className="text-xl font-bold flex gap-2">
            <span className="text-gray-500 font-normal"> bs:</span>
            {user.company.bs}
          </p>
        </div>
      </div>
      {/* ********************************* User Address Details  ****************************************** */}
      <div className="flex-grow pl-5">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold mb-2">Address:</h3>
          <div className="ml-10 space-y-2">
            <p className="text-xl font-bold flex gap-2">
              <span className="text-gray-500 font-normal">Street:</span>
              {user.address.street}
            </p>
            <p className="text-xl font-bold flex gap-2">
              <span className="text-gray-500 font-normal">Suite:</span>
              {user.address.suite}
            </p>
            <p className="text-xl font-bold flex gap-2">
              <span className="text-gray-500 font-normal">City:</span>
              {user.address.city}
            </p>

            <p className="text-xl font-bold flex gap-2">
              <span className="text-gray-500 font-normal">Zip Code: </span>
              {user.address.zipcode}
            </p>
          </div>

          <div className="mt-5">
            <img
              src="/images/map.jpg"
              alt="User Avatar"
              className="w-[600px] h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
