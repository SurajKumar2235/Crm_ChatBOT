            },\
            "created_time": "2024-07-20T00:51:23+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

#### Sample Response: For Job QUEUED

``` json
Copied{
    "data": [\
        {\
            "id": "3652397000000646004",\
            "operation": "read",\
            "state": "QUEUED",\
            "result": {\
                "page": 1,\
                "per_page": 200000,\
                "count": 200000,\
                "download_url": "/crm/bulk/v7/read/2276164000001136017/result",\
                "more_records": true,\
                "next_page_token": "bca6fba106357ae3b1ecbd63f"\
            },\
            "query": {\
                "module": {\
                    "id": "2276164000000000125",\
                    "api_name": "Contacts"\
                },\
                "page": 1\
            },\
            "created_by": {\
                "id": "2276164000000471001",\
                "name": "Patricia"\
            },\
            "created_time": "2024-07-20T00:51:23+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

#### Sample Response: For Job IN PROGRESS

``` json
Copied{
    "data": [\
        {\
            "id": "3652397000000646004",\
            "operation": "read",\
            "state": "IN PROGRESS",\
            "result": {\
                "page": 1,\
                "per_page": 200000,\
                "count": 200000,\
                "download_url": "/crm/bulk/v7/read/2276164000001136017/result",\
                "more_records": true,\
                "next_page_token": "bca6fba106357ae3b1ecbd63f"\
            },\
            "query": {\
                "module": {\
                    "id": "2276164000000000125",\
                    "api_name": "Contacts"\
                },\
                "page": 1\
            },\
            "created_by": {\
                "id": "2276164000000471001",\
                "name": "Patricia"\
            },\
            "created_time": "2024-07-20T00:51:23+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

#### Sample Response: For Job COMPLETED

``` json
Copied{
    "data": [\
        {\
            "id": "3652397000000646004",\
            "operation": "read",\
            "state": "COMPLETED",\
            "result": {\
                "page": 1,\
                "per_page": 200000,\
                "count": 200000,\
                "download_url": "/crm/bulk/v7/read/2276164000001136017/result",\
                "more_records": true,\
                "next_page_token": "bca6fba106357ae3b1ecbd63f"\
            },\
            "query": {\
                "module": {\
                    "id": "2276164000000000125",\
                    "api_name": "Leads"\
                },\
                "page": 1\
            },\
            "created_by": {\
                "id": "2276164000000471001",\
                "name": "Patricia"\
            },\
            "created_time": "2024-07-20T00:51:23+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

Show full

Show less

#### Response Structure

- operationstring



Specifies the type of action the API completed. Sample - "operation" : "read”.

- created\_byJSON Object



Specifies the ID and Name of the user who initiated the bulk read job. Sample - "created\_by": { "id": "1000000031045", "name": "Patricia Boyle" },

- created\_timeISO8601



Specifies the time period of when the bulk read job was initialized.

- statestring



Specifies the current status of the bulk read job. Example: "state": "ADDED", "QUEUED", "IN PROGRESS", or "COMPLETED".

- queryJSON Object



Specifies the "query" provided by the user when creating the bulk read job. The attributes are the same as in the Request JSON, with "modules", "cvid", fields", "criteria" and "page".

- idString



Specifies the unique identifier of the bulk read job. Sample - "id": "1000010760002".

- resultJSON Object



It is available only after the completion of the job. Please refer to the below section for information on the "result" JSON object.


#### "result" Properties

- pageInteger



Describes the range of the number of records exported. If the "page" is one, then the number of records would be between 1 - 200,000. If it's "two", then the records from 200,001 - 400,000 will be taken for export.

- page\_tokenstring



The token used to fetch the next page of results. You can use the " **page**" key to fetch up to 200,000 records without "page\_token". To fetch more than 200,000 records, you must include the " **page\_token**" key in the request body.

- countInteger



Specifies the actual number of records exported. Sample - "count": 14567

- download\_urlString



Specifies the url which contains the CSV file. User can send a GET request with your api domain attached to the download URL to download the file. Sample - "/crm/bulk/v7/read/2883756000001275012/result".

- more\_recordsboolean



The "more\_records" key in the response can be used to detect if there are any further records. You can change the value of "page" key for additional export jobs.


**Note**

To know about the Bulk Read API limits, [go here](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/limitations.html).

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have ZohoCRM.bulk.read or ZohoCRM.modules.{module\_name}.READ. Create a new client with valid scope. Refer to scope section above.

- NO\_PERMISSIONHTTP 403



Permission denied to read

**Resolution:** The user does not have permission to read records. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AUTHORIZATION\_FAILEDHTTP 400



User does not have sufficient privilege to read.

**Resolution:** The user does not have the permission to read records. Contact your system administrator.

- RESOURCE\_NOT\_FOUNDHTTP 404



The requested resource doesn't exist.

**Resolution:** The job ID specified is invalid. Specify a valid job ID.


#### Sample Request: For the job with cvid and Criteria

``` curl
Copiedcurl "https://www.zohoapis.com/crm/bulk/v7/read/554023000000568002"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Sample Response: For Job Completed

``` json
Copied{
    "data": [\
        {\
            "id": "4150868000004717006",\
            "operation": "read",\
            "state": "COMPLETED",\
            "result": {\
                "page": 1,\
                "per_page": 200000,\
                "count": 0,\
                "download_url": "/crm/bulk/v7/read/4150868000004717006/result",\
                "more_records": false\
            },\
            "query": {\
                "fields": [\
                    "Last_Name",\
                    "Owner",\
                    "Owner.last_name",\
                    "$converted",\
                    "Lead_Source",\
                    "Lead_Status",\
                    "Company",\
                    "Email",\
                    "Mobile",\
                    "Created_Time"\
                ],\
                "module": {\
                    "id": "4150868000000002175",\
                    "api_name": "Leads"\
                },\
                "criteria": {\
                    "group": [\
                        {\
                            "field": {\
                                "id": null,\
                                "api_name": "$converted"\
                            },\
                            "comparator": "equal",\
                            "value": false\
                        },\
                        {\
                            "group": [\
                                {\
                                    "field": {\
                                        "id": "4150868000000002595",\
                                        "api_name": "Last_Name"\
                                    },\
                                    "comparator": "equal",\
                                    "value": "Patricia"\
                                },\
                                {\
                                    "field": {\
                                        "id": "4150868000000002599",\
                                        "api_name": "Email"\
                                    },\
                                    "comparator": "equal",\
                                    "value": "patricia.b@zylker.com"\
                                }\
                            ],\
                            "group_operator": "and"\
                        }\
                    ],\
                    "group_operator": "and"\
                },\
                "page": 1,\
                "cvid": "4150868000000087501"\
            },\
            "created_by": {\
                "id": "4150868000000225013",\
                "name": "Patricia Boyle"\
            },\
            "created_time": "2021-02-22T18:24:38+05:30",\
            "file_type": "csv"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/bulk-read/job-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)