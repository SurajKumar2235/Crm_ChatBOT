The name of the group that the user is associated with.

- modified\_by



The name and ID of the user who last modified the details of the group.

- description



The description of the group.

- id



The unique ID of the group.

- created\_by



The name and ID of the user who created the group.

- info



Contains the following details:



- **per\_page** \- the maximum number of records that can be fetched per API call. The value is 200.
- **page** \- the page number from which the records are fetched in current API call.
- **count** \- the number of records that were fetched in the API call.
- **more\_records** \- Represents if there are more records that can be fetched.

#### Possible Errors

- NO\_CONTENTHTTP 204



There are no groups associated to that user.

**Resolution:** Associate the user to one or more groups before trying this API.

- INVALID\_DATAHTTP 400



The user ID is invalid.

**Resolution:** Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user.


#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "created_time": "2023-06-06T07:58:32+05:30",\
            "modified_time": "2023-06-06T08:03:40+05:30",\
            "name": "Tier1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "description": null,\
            "id": "3652397000012454002",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 1,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/associated-groups-of-a-user.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)