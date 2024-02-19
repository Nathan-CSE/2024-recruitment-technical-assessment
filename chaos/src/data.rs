use axum::{http::StatusCode, response::IntoResponse, Json};
use serde::{Deserialize, Serialize};

pub async fn process_data(Json(request): Json<DataRequest>) -> impl IntoResponse {
    // Calculate sums and return response

    // TODO:
    // -  Given a json, calculate the total sum of the characters in all the strings as well as the sums of all the numbers
    // - We're given a struct type 'DataRequest' that is able to be deserialized -> we need to deserialize it,
    // calcualte the adequate sums and then send it back

    let string_len = 0;
    let int_sum = 0;

    for item in request {
        match {

        };
    };


    let response = DataResponse {
        string_len,
        int_sum
    };

    (StatusCode::OK, Json(response))
}

#[derive(Deserialize)]
pub struct DataRequest<T> {
    // Add any fields here
    data: Vec<T>
}

#[derive(Serialize)]
pub struct DataResponse {
    // Add any fields here
    string_len: i32,
    int_sum: i32,
}
