
# Get the Status of the Export Audit Log Job

#### Purpose

To retrieve the details of the export audit log job that was scheduled previously using the [POST Export Audit Log API](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html).

#### Endpoints

[GET /settings/audit\_log\_export](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html)

[GET /settings/audit\_log\_export/{export\_job\_ID}](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html)

### Request Details

#### Request URLs

**To retrieve the status of all the export audit log jobs :**

{api-domain}/crm/{version}/settings/audit\_log\_export

**To retrieve the status of a specific export audit log job :**

{api-domain}/crm/{version}/settings/audit\_log\_export/{export\_job\_ID}

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.settings.audit\_logs.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/audit_log_export"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- audit\_log\_exportJSON array



Contains the details for the audit log export request.



  - idstring



    Represents the unique job ID of the export audit log job.

  - status string



    Represents the status of the export audit log job.



    **Possible values:** Progress, Scheduled, Finished, and Failed.

  - job\_start\_timestring



    Represents the time at which the export job started.

  - job\_end\_timestring



    Represents when the export job was completed.

  - expiry\_datestring



    Represents the expiry time of the exported audit log available in the download links.

  - created\_byJSON object



    Represents the ID and Name of the Zoho CRM user who initiated the export job.

  - criteriaJSON object



    Represents the conditions specified for a specific export audit log job using the [Create Export Audit Log API](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html).

  - download\_linksJSON array



    Represents the unique downloadable link for the exported audit log result. You can either click the link to download the results directly through your browser while logged into Zoho CRM, or use the [GET - Download Export Audit Log Result API](https://www.zoho.com/crm/developer/docs/api/v7/download-export-audit-log-result.html) to retrieve the results.

#### Possible Errors

- NO\_CONTENTHTTP 400



No audit log has been scheduled

**Resolution:** Export a new audit log, using the [Create Export Audit Log API](https://www.zoho.com/crm/developer/docs/api/v7/create-export-audit-log.html).

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL.

Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to view the exported audit log. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NO\_PERMISSIONHTTP 403



Permission denied

**Resolution:** Contact the system admin.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "audit_log_export": [\
        {\
            "id": "2276164000001008015",\
            "status": "finished",\
            "job_start_time": "2024-07-03T21:11:59+05:30",\
            "job_end_time": "2024-07-03T21:12:26+05:30",\
            "expiry_date": null,\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "criteria": {\
                "comparator": "between",\
                "field": {\
                    "api_name": "audited_time"\
                },\
                "value": [\
                    "2024-01-13T00:00:00+05:30",\
                    "2024-01-20T23:59:59+05:30"\
                ]\
            },\
            "download_links": [\
                "https://download.zoho.com/v2/crm/15515278/auditlog/111111000000066005/AuditLog_001.zip"\
            ]\
        },\
        {\
            "id": "2276164000001008008",\
            "status": "finished",\
            "job_start_time": "2024-07-03T19:43:21+05:30",\
            "job_end_time": "2024-07-03T19:43:31+05:30",\
            "expiry_date": null,\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "criteria": {\
                "comparator": "between",\
                "field": {\
                    "api_name": "audited_time"\
                },\
                "value": [\
                    "2024-01-13T00:00:00+05:30",\
                    "2024-01-20T23:59:59+05:30"\
                ]\
            },\
            "download_links": [\
                "https://download.zoho.com/v2/crm/15515278/auditlog/211111000000066241/AuditLog_001.zip"\
            ]\
        },\
        {\
            "id": "2276164000001003018",\
            "status": "finished",\
            "job_start_time": "2024-07-03T16:45:42+05:30",\
            "job_end_time": "2024-07-03T16:46:06+05:30",\
            "expiry_date": null,\
            "created_by": {\
                "name": "Patricia",\
                "id": "2276164000000471001"\
            },\
            "criteria": {\
                "group_operator": "and",\
                "group": [\
                    {\
                        "comparator": "in",\
                        "field": {\
                            "api_name": "done_by"\
                        },\
                        "value": [\
                            {\
                                "name": "Boyle",\
                                "id": "2276164000000799326"\
                            },\
                            {\
                                "name": "Boyle",\
                                "id": "2276164000000799326"\
                            }\
                        ]\
                    },\
                    {\
                        "group_operator": "and",\
                        "group": [\
                            {\
                                "comparator": "in",\
                                "field": {\
                                    "api_name": "module"\
                                },\
                                "value": [\
                                    {\
                                        "api_name": "Contacts",\
                                        "id": "2276164000000000129"\
                                    },\
                                    {\
                                        "api_name": "Leads",\
                                        "id": "2276164000000000125"\
                                    }\
                                ]\
                            },\
                            {\
                                "group_operator": "and",\
                                "group": [\
                                    {\
                                        "comparator": "equal",\
                                        "field": {\
                                            "api_name": "action"\
                                        },\
                                        "value": "updated"\
                                    },\
                                    {\
                                        "comparator": "between",\
                                        "field": {\
                                            "api_name": "audited_time"\
                                        },\
                                        "value": [\
                                            "2023-12-05T00:00:00+05:30",\
                                            "2024-01-04T23:59:59+05:30"\
                                        ]\
                                    }\
                                ]\
                            }\
                        ]\
                    }\
                ]\
            },\
            "download_links": [\
                "https://download.zoho.com/v2/crm/15515123/auditlog/211111000000066512/AuditLog_001.zip"\
            ]\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/get-export-audit-log.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)