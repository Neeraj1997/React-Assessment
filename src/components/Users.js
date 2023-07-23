import React from "react";

function Users({ userDetails }) {
  console.log(userDetails);
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-3 ">
      {userDetails?.length > 0 &&
        userDetails.map(({ name, address }) => (
          <div class=" bg-slate-100 rounded-xl p-8 md:p-0">
            <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
              <figcaption class="font-medium">
                <div class="text-sky-500 ">
                  {name.firstname.toUpperCase()} {name.lastname.toUpperCase()}
                </div>
                <div class="text-slate-700">
                  Address: {address.street}, {address.city}
                </div>
              </figcaption>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Users;
