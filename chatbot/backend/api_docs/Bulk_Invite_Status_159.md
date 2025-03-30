- statusstring



The status of the invitation. "success" indicates that an invitation was sent, "error" indicates that an error has occurred.


- job\_idstring



The ID of the job.

- statusstring



The status of the job. The possible values are "completed" and "in\_progress"


#### Sample Response when job\_id is sent

``` json
Copied{
    "portal_invite": [\
        {\
            "data": [\
                {\
                    "details": {\
                        "id": "5020928000001843001"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                }\
            ],\
            "job_id": "5020928000002387017",\
            "status": "completed"\
        }\
    ]
}
```

Show full

Show less

#### Sample Response when job\_id is not sent

``` json
Copied{
    "portal_invite": [\
        {\
            "data": [\
                {\
                    "details": {\
                        "id": "5020928000002121016"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                }\
            ],\
            "job_id": "5020928000002387005",\
            "status": "completed"\
        },\
        {\
            "data": [\
                {\
                    "details": {},\
                    "code": "CANNOT_PROCESS",\
                    "message": "Invalid type for the portal invite",\
                    "status": "error"\
                }\
            ],\
            "job_id": "5020928000002387007",\
            "status": "completed"\
        },\
        {\
            "data": [\
                {\
                    "details": {\
                        "id": "5020928000002121016"\
                    },\
                    "code": "SUCCESS",\
                    "message": "Invite has been resent to personality",\
                    "status": "success"\
                }\
            ],\
            "job_id": "5020928000002387013",\
            "status": "completed"\
        },\
        {\
            "data": [\
                {\
                    "details": {\
                        "id": "5020928000000621005"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                },\
                {\
                    "details": {\
                        "id": "5020928000000606073"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                },\
                {\
                    "details": {\
                        "id": "5020928000000544003"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                },\
                {\
                    "details": {\
                        "id": "5020928000000523039"\
                    },\
                    "code": "SUCCESS",\
                    "message": "An Invite has been sent to the personality.",\
                    "status": "success"\
                }\
            ],\
            "job_id": "5020928000002387021",\
            "status": "completed"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-portal-invite-users-job-status.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)