# 📘 0x04. TypeScript

This project is a comprehensive hands-on introduction to TypeScript, covering interfaces, advanced types, namespaces, declaration merging, nominal typing, and practical real-world scenarios using ambient declarations and OOP concepts.

## ✅ Table of Contents

- [Task 0: Creating an interface for a student](#task-0-creating-an-interface-for-a-student)
- [Task 1: Let's build a Teacher interface](#task-1-lets-build-a-teacher-interface)
- [Task 2: Extending the Teacher class](#task-2-extending-the-teacher-class)
- [Task 3: Printing teachers](#task-3-printing-teachers)
- [Task 4: Writing a class](#task-4-writing-a-class)
- [Task 5: Advanced types Part 1](#task-5-advanced-types-part-1)
- [Task 6: Creating functions specific to employees](#task-6-creating-functions-specific-to-employees)
- [Task 7: String literal types](#task-7-string-literal-types)
- [Task 8: Ambient Namespaces](#task-8-ambient-namespaces)
- [Task 9: Namespace & Declaration merging](#task-9-namespace--declaration-merging)
- [Task 10: Using merged declarations](#task-10-using-merged-declarations)
- [Task 11: Brand convention & Nominal typing](#task-11-brand-convention--nominal-typing)

---

## Task 0: Creating an interface for a student

- Interface `Student` with fields: `firstName`, `lastName`, `age`, `location`
- Creates a table with two students rendered in vanilla JS

**Files:**
- `task_0/js/main.ts`
- `task_0/package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`

---

## Task 1: Let's build a Teacher interface

- Interface `Teacher` includes `firstName`, `lastName`, `location`, `fullTimeEmployee`, `yearsOfExperience?`, and dynamic properties like `contract`

**Files:**
- `task_1/js/main.ts`
- `task_1/webpack.config.js`, `tsconfig.json`, `package.json`

---

## Task 2: Extending the Teacher class

- Interface `Directors` extends `Teacher` and adds `numberOfReports`

**Files:**
- `task_1/js/main.ts` (continued)

---

## Task 3: Printing teachers

- Function `printTeacher()` with signature `printTeacherFunction`
- Prints initials of the teacher’s name

---

## Task 4: Writing a class

- Interface and class `StudentClass` with methods:
  - `displayName()`
  - `workOnHomework()`

**Files:**
- `task_1/js/main.ts` (continued)

---

## Task 5: Advanced types Part 1

- Interfaces `DirectorInterface` and `TeacherInterface`
- Classes: `Director`, `Teacher`
- Factory: `createEmployee(salary)`

---

## Task 6: Creating functions specific to employees

- Function `isDirector()` type guards
- Function `executeWork()` dynamically runs based on instance

---

## Task 7: String literal types

- Literal type `Subjects` for `'Math' | 'History'`
- Function `teachClass(todayClass: Subjects)`

---

## Task 8: Ambient Namespaces

- Defines RowID, RowElement
- Creates ambient type declarations in crud.d.ts
- Uses external CRUD functions on simulated DB rows

**Files:**
- `task_3/js/main.ts, crud.d.ts, interface.ts, crud.js` 

---

## Task 9: Namespace & Declaration merging

- Declares Subjects namespace
- Interfaces and classes: Teacher, Subject, Cpp, Java, React
- Demonstrates declaration merging (e.g., extending Teacher in multiple files)

**Files:**
- `task_4/js/subjects/Teacher.ts, Subject.ts, Cpp.ts, Java.ts, React.ts` 

---

## Task 10: Using merged declarations

- File `main.ts` initializes:
    - `cpp, java, react` as instances
    - Assigns a teacher object and logs requirements and availability


**Files:**
- `task_4/js/main.ts` 

---


## Task 11: Brand convention & Nominal typing

- Interfaces `MajorCredits, MinorCredits` include `credits` and branded field
- Functions `sumMajorCredits` and `sumMinorCredits`


**Files:**
- `task_5/js/main.ts, package.json, tsconfig.json, webpack.config.js` 

---

## How to Run
- npm install
- npm run build
- // For Webpack dev server (optional)// 
 - npm run dev

# Author
---
## ALX Software Engineering Program
## Student: Caleb Wafula



