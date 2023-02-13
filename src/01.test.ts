import test from "node:test";
import {CourseType} from "./01";

test('Men over 90 are expected', () => {
    const ages = [18, 20, 24, 85, 14, 90, 12, 100];

    // const predicate = (age: number) => {
    //     return age > 90;
    // }                                                          // если ф-ция только возвращает,
    // const predicate = (age: number) => age > 90;               // то скобки и return не нужны

// если true, то фильтр вернется
// в исходный массив
    // const oldAges = ages.filter((age: number) => age > 90);

    //ф-цию просто вставили в фильтр,так как она возвращает true

    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})


test('Need courses cheaper than 160', () => {
    const courses = [
        {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150},
    ];

    // const cheapPredicate = (course: CourseType) => {
    //     return course.price < 160;
    // }
    // const cheapCourses = courses.filter((course: CourseType) => {
    //     return course.price < 160;
    // });

    const cheapCourses = courses.filter(course => course.price < 160);  // эй, fitler, пробеги по всем courses,
                                                                        // каждый курс придет в course перед скобкой,
    expect(cheapCourses.length).toBe(2);                       // если price < 160 пропусти в cheapCourses
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const completedTasks = tasks.filter(tasks => tasks.isDone)
// const completedTasks = tasks.filter( function (tasks) {
// return tasks.isDone
// })
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe(2);
    expect(completedTasks[1].title).toBe(4);
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Salt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    // const completedTasks = tasks.filter(tasks => tasks.isDone === false) // после фигурной стрелки возвращается возврат

// const completedTasks = tasks.filter( function (tasks) {
//     return tasks.isDone
// })

    const completedTasks = tasks.filter(tasks => !tasks.isDone) // таска НЕ выполнена. так пишется в реальной жизни
    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe(1);
    expect(completedTasks[1].title).toBe(3);
})