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
                    "type": "users"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- DUPLICATE\_DATAHTTP 400



Group name already exists.

**Resolution:** Group name is unique. Specify another name for the group you are trying to create.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not included the key "name" in the input.

**Resolution:** "name" is a mandatory key. Ensure that you give a name to the user group you want to create.

- INVALID\_DATAHTTP 400



The role or territory ID is invalid.

**Resolution:** Refer to the "details" key in the response for the exact error and rectify it accordingly.

- NO\_PERMISSIONHTTP 403



You do not have permission to create a user group.

**Resolution:** Contact your administrator to obtain the "Manage Groups" permission to be able to create a user group.


#### Sample Response

``` json
Copied{
    "user_groups": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "5725767000002350003"\
            },\
            "message": "User Group Created successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-user-group.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)