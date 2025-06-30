const express = require('express')
const { createJob, getAllJobs, getSingleJob, updateJob, deleteJob } = require('../controllers/jobsController')
const jobsRouter = express.Router()

jobsRouter.route('/').post(createJob).get(getAllJobs)
jobsRouter.route('/:id').get(getSingleJob).patch(updateJob).delete(deleteJob)

module.exports = jobsRouter 