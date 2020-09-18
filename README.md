## AirCnC Api (Node.js && Express.js && MongoDB)

# AirCnC Api

## Open Endpoints

Open endpoints require no Authentication.

* [Sessions]: `POST /sessions` -- Create new user

* [Spots]: `GET /spots` -- List all spots
* [Spots]: `POST /spots` -- Create one spot
* [Spots]: `POST /spots/:spot_id/bookings` -- Show specific spot

* [Bookings]: `POST /bookings/:booking_id/approvals` -- Accept booking
* [Spots]: `POST /bookings/:booking_id/rejections` -- Reject booking

* [Dashboard]: `GET /dashboard` -- Show specific user
