# CHAOS Technical Task

***Complete as many questions as you can.***

## Question 1
You have been given a skeleton function `process_data` in the `data.rs` file.
Complete the parameters and body of the function so that given a JSON request of the form

```json
{
  "data": ["Hello", 1, 5, "World", "!"]
}
```

the handler returns the following JSON:
```json
{
  "string_len": 11,
  "int_sum": 6
}
```

Edit the `DataResponse` and `DataRequest` structs as you need.

## Question 2

### a)
Write (Postgres) SQL `CREATE TABLE` statements to create the following schema.
Make sure to include foreign keys for the relationships that will `CASCADE` upon deletion.
![Database Schema](db_schema.png)

**Answer box:**
```sql
CREATE TABLE forms (
    id integer,
    title text,
    description text,
    primary key (id),     
);

CREATE TABLE questions (
    id integer,
    form_id integer,
    title text,
    question_type question_type,
    foreign key(form_id) references forms(id)
);

CREATE TABLE question_options (
    id integer,
    question_id integer,
    option text,
    foreign key(option) references questions(id)
);
```

### b)
Using the above schema, write a (Postgres) SQL `SELECT` query to return all questions in the following format, given the form id `26583`:
```
   id    |   form_id   |           title             |   question_type   |     options
------------------------------------------------------------------------------------------------------------
 2       | 26583       | What is your full name?     | ShortAnswer       | [null]
 3       | 26583       | What languages do you know? | MultiSelect       | {"Rust", "JavaScript", "Python"}
 7       | 26583       | What year are you in?       | MultiChoice       | {"1", "2", "3", "4", "5+"}
```

**Answer box:**
```sql
SELECT
    questions.id,
    questions.form_id,
    questions.title,
    questions.question_type,
    question_options
FROM
    questions
    JOIN question_options ON questions.id = question_options.id
WHERE
    questions.form_id = 26583
GROUP BY q.form_id,
ORDER BY q.id;
```