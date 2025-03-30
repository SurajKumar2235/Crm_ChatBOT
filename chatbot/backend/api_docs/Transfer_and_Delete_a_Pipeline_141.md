        {\
            "pipeline": {\
                "from": "3652397000003712004",\
                "to": "3652397000003097007"\
            },\
            "stages": [\
                {\
                    "from": "3652397000000006817",\
                    "to": "3652397000000006819"\
                }\
            ]\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not included either the JSON object "pipeline" or the "stages" array in the input.

**Resolution:** Include the "pipeline" JSON object and the "stages" array with the required keys and their values.

- INVALID\_DATAHTTP 400



The ID of the layout is invalid.

**Resolution:** Provide a valid layout ID.

- INVALID\_DATAHTTP 400



Either the "from" or "to" ID is invalid in the input.

**Resolution:** Refer to the "details" key int he response for the API name of the invalid key, and provide a valid input.

- REQUIRED\_PARAM\_MISSINGHTTP 400



You have not included the mandatory parameter "layout\_id" in your request.

**Resolution:** Specify valid layout ID in the request.


#### Sample Response

``` json
Copied{
    "transfer_pipeline": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "job_id": "3652397000003737002"\
            },\
            "message": "transfer pipeline scheduled successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/transfer-and-delete-pipeline.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)