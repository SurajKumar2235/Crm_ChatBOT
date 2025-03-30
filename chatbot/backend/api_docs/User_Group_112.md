                {\
                    "source": {\
                        "name": "Manager",\
                        "id": "3652397000000026008"\
                    },\
                    "type": "roles",\
                    "subordinates": true\
                },\
                {\
                    "source": {\
                        "name": "New York",\
                        "id": "3652397000007622003"\
                    },\
                    "type": "territories",\
                    "subordinates": true\
                },\
                {\
                    "source": {\
                        "name": "Deborah Gill",\
                        "id": "3652397000000281001"\
                    },\
                    "type": "users",\
                    "_delete":true\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_DATAHTTP 400



- The role or territory ID is invalid.
- The user group ID is invalid.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly.

- NO\_PERMISSIONHTTP 403



You do not have permission to update a user group.

**Resolution:** Contact your administrator to obtain the "Manage Groups" permission to be able to create a user group.


#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "3652397000009949005"\
            },\
            "message": "User Group Updated successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/update-user-group.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)