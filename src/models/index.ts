import { Category } from "./Category";
import { Course } from './Course';
import { Episode } from './Episode';
import { User } from './User'

Category.hasMany(Course)

Course.belongsTo(Category)
Course.hasMany(Episode)

Episode.belongsTo(Course)

Category.hasMany(Course, { as: 'courses' })
Course.hasMany(Episode, { as: 'episodes' })



export {
    Course,
    Category,
    Episode,
    User
}