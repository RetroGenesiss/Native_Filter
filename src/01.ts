export const ages = [18, 20, 24, 85, 14, 90, 12, 100];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100];

export type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 100},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourses = [
    {title: 'CSS', price: 100},
    {title: 'REACT', price: 150},
];

