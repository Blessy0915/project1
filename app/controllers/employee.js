const Employee = require('../model/emp')
const Project = require('../model/project')

module.exports.list = (req, res) =>
{
    Employee.find()
    .then((employees)=>
    {
        res.json(employees)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.create = (req,res) =>
{
    const body = req.body
    const employee = new Employee(body)
    employee.save()
    .then((emp)=>
    {
        console.log(emp)
        res.json(emp)
    })
    .catch((err)=>
    {
        res.send(err)
    })
}

module.exports.delete = (req,res) =>
{
    const id = req.params.id
    Employee.findByIdAndDelete(id)
    .then((emp)=>
    {
        if(emp)
        {
            res.json(emp)
        }
        else
        {
            res.send({})
        }
    })
    .catch((err)=>
    {
        res.send(err)
    })
}