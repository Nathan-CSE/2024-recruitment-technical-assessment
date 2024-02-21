use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};
use serde_json::{self, json};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    // Calculate sums and return response

    // TODO:
    // -  Given a json, calculate the total sum of the characters in all the strings as well as the sums of all the numbers
    // - We're given a struct type 'DataRequest' that is able to be deserialized -> we need to deserialize it,
    // calcualte the adequate sums and then send it back

    // Can't seem to test with POSTMAN -> Failed to deserialize the JSON body into the target type: data[0]: unknown variant `Hello`, expected `String` or `Number` at line 2 column 18
    // Seems that the server is receiving the data, but the program can't deserialize it
    // Not sure why -> the function doesn't even run

    let mut string_len: i32 = 0;
    let mut int_sum: i32 = 0;

    
    for item in request.data {
        match item {
            Data::String(x) => string_len += x.chars().count() as i32,
            Data::Number(x) => int_sum += x,

        };
    };


    let response = DataResponse {
        string_len,
        int_sum
    };

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
pub struct DataRequest {
    // Add any fields here
    pub data: Vec<Data>
}

#[derive(Serialize, deser)]
pub struct DataResponse {
    // Add any fields here
    pub string_len: i32,
    pub int_sum: i32,
}

#[derive(Deserialize)]
pub enum Data {
    String(String),
    Number(i32),
}
