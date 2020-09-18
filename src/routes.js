const { Router } = require('express');


const upload = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');
const RejectionController = require('./controllers/RejectionController');
const ApprovalController = require('./controllers/ApprovalController');

require('./config/database');

const routes = Router();

const sessionController = new SessionController();
const spotController = new SpotController();
const dashboardController = new DashboardController();
const bookingController = new BookingController();
const rejectionController = new RejectionController;
const approvalController = new ApprovalController;

routes.post('/sessions', sessionController.store);

routes.get('/spots', spotController.index);
routes.post('/spots', upload.single('thumbnail'), spotController.store);

routes.get('/dashboard', dashboardController.show);

routes.post('/spots/:spot_id/bookings', bookingController.store);

routes.post('/bookings/:booking_id/approvals', approvalController.store);
routes.post('/bookings/:booking_id/rejections', rejectionController.store);

module.exports = routes;
