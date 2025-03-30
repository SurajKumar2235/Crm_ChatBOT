                "id": "554xxxx966",\
                "zuid": "554xxx5011"\
            }\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUNDHTTP 400



One or more required fields is not specified in the input.

**Resolution:** The "details" key specifies the API name of the mandatory field you have not included in the input body. Include all the mandatory keys in the input.

- INVALID\_DATAHTTP 400



You have specified an incorrect ID in the "user" object, or you have specified an incorrect time in either the "to" or "from" fields.

**Resolution:** Specify the correct ID and the right time in the ISO8601 format. Ensure that the unavailability time period starts before the time it ends.


#### Sample Response

``` json
Copied{
    "users_unavailability": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "554023000002221001"\
            },\
            "message": "Unavailability created successfully.",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/post-user-unavailability.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)