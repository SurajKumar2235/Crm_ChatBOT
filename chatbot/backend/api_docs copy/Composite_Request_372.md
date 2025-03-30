
# Composite API

#### Purpose

To perform a composite API call, consisting of one or up to five sub-requests.

#### Endpoints

[POST /\_\_composite\_requests](https://www.zoho.com/crm/developer/docs/api/v7/composite-api.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/\_\_composite\_requests

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.composite\_requests.CUSTOM

(and) Scope of the subrequest

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/__composite_requests"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa"
-d "@newdata.json"
```

##### Request JSON

- rollback\_on\_failboolean, optional



Represents whether to rollback the composite API request if any of the sub-requests fail. The default value is false.

- parallel\_executionboolean, optional



Represents whether to process all independent sub-requests (sub-requests with no dependencies/references) in parallel. The default value is true. If "rollback\_on\_fail" is true, then the default value of this key is false.

- \_\_composite\_requestsJSON array, mandatory



The JSON array containing the details of the sub-requests.



- **sub\_request\_id** (string, optional) - The request ID for the corresponding sub-request. The accepted regex is _\[a-zA-Z0-9\]\[a-zA-Z0-9\_\]\*_.
- **uri** (string, mandatory) - The request URL of the corresponding sub-request. The accepted regex is _/crm(/.\*)?/v\[0-9\]+(\[.\]\[0-9\]+)?/.\*_.
- **method** (string, mandatory) - The request method of the corresponding sub-request. The possible methods are GET, POST, PUT, PATCH, and DELETE.
- **params** (JSON Object, optional) - The parameters for the corresponding sub-request.
- **body** (JSON object, optional) - The request body of the corresponding sub-request.
- **headers** (JSON object, optional) - Headers for the corresponding sub-request. Note that you cannot use the headers "authorization" or "x-crm-org" in this key.

**Note**

- **rollback\_on\_fail** and **parallel\_execution** keys cannot both be true, simultaneously. For such a request, the system throws the AMBIGUITY\_DURING\_PROCESSING error.
- All Delete APIs (except Notification APIs) are only supported with ID support in the URL. Bulk delete option is not supported.
- When **rollback\_on\_fail** is false:
  - Workflows, approvals, and other automation actions are triggered as intended.
  - One API credit is consumed.
- When **rollback\_on\_fail** is true:
  - **Workflows**:
    - The automation actions are executed only when all the sub-requests are served and a rollback is not performed. If one or more sub-requests fail and a rollback happens, the automation actions are not triggered.
    - For example, consider the case where a workflow is triggered every time a lead is created with the company name starting with 'S'. In sub-request 1, a lead is created, whose Company name starts with 'S', and sub-request 2 edits the newly created record's company name so that it does not start with 'S'. Only after executing both the sub-requests the workflow will be executed. But in this case, the workflow will not be triggered because the newly created Lead's company name is already updated in sub-request 2, and the criterion for the workflow is not met. Consider another case, where in sub-request 1, a lead is created, whose Company name is 'Silicon Solutions', and sub-request 2 edits this newly created record's website. If none of the other sub-requests change the company name of this newly created record, after executing all the sub-requests successfully, the workflow will be triggered.
  - When a rollback happens, one credit will be used for the composite API.
  - When all the sub-requests are successful, two credits will be used for the composite API.
- Each composite API consumes five concurrency credits, irrespective of the number of sub-requests.
- Each composite API reduces the sub-concurrency by one, while the sub-requests consume their respective sub-concurrencies.

### Allowed APIs

The following table gives the list of APIs allowed in a composite request. For these APIs, there are restrictions on the number of records that you can create, update, or delete in a composite request.

| API | No. of records allowed |
| --- | --- |
| Get Org, Get Metadata, Convert a Lead, Get Layout Rules, Get Validation Rules, Get Custom Links, Get/Add/Update Roles, Get Profiles, Get Records' Count, Get/Update Blueprint, Get Variables/Variable Groups, Get Tags, Add/Remove Tags for a record, Get List of Attachments, Delete Photo, Get Currencies, Get Shared Record Details, Get Assignment Rules, Get/Add/Update Pipeline, Get Wizards, Get List of From Addresses, Delete Notifications, | No restriction |
| Add/Update/Delete Users, Update/Delink Related Records, Add/Delete Variables, Create/Update/Delete Notes, Create/Update/Merge Tags, Add/Update Currency, Add/Update/PATCH Notifications, Create/Update/Upsert/Delete Records, | 1 |
| Get Territories, Get Notes, Get Email/Inventory Templates, Get Notifications, Get/Search Records, Get Related Records, Get records through a COQL query, Get Deleted Records, Get Users | 25 |

#### Sample Input

``` json
Copied{
    "rollback_on_fail": true,
    "parallel_execution" : false,
    "__composite_requests": [\
        {\
            "sub_request_id":"1",\
            "method":"POST",\
            "uri":"/crm/v6/Leads",\
            "headers":{},\
            "body":\
            {\
                "data":[\
                    {\
                        "Last_Name":"Boyle"\
                    }\
                ]\
            }\
        },\
        {\
            "sub_request_id":"2",\
            "method":"PUT",\
            "uri":"/crm/v6/Leads/@{1:$.data[0].details.id}",\
            "body":{\
                "data":[\
                    {\
                        "Company":"ABC"\
                    }\
                ]\
            }\
        },\
        {\
            "sub_request_id":"3",\
            "method":"GET",\
            "params":{\
                "fields":"Last_Name,Company,Email",\
                "per_page":"3",\
                "page":"1"\
            },\
            "uri":"/crm/v6/Leads/@{2:$.data[0].details.id}"\
        },\
        {\
            "sub_request_id":"4",\
            "method":"GET",\
            "params":{\
                "fields":"Last_Name, Modified_Time"\
            },\
            "headers":{\
                "If-Modified-Since":"2020-08-22T12:30:00+05:30"\
            },\
            "uri":"/crm/v6/Leads"\
        },\
        {\
            "sub_request_id":"5",\
            "method":"GET",\
            "params":{\
                "fields":"Last_Name, Modified_Time"\
            },\
            "uri":"/crm/v6/Leads/554023000001736019"\
        }\
    ]
}
```

#### Possible Errors

- API\_NOT\_SUPPORTEDHTTP 400



You have invoked the API from an unsupported version

**Resolution:** You can only use Composite API from V3.

- INVALID\_DATAHTTP 400



You have specified an invalid value for either rollback\_on\_fail or parallel\_execution

**Resolution:** The possible values for these keys are either "true" or "false".

- INVALID\_DATAHTTP 400



You have not specified a JSON array for the "composite\_requests" key.

**Resolution:** Input a valid JSON array in the key.

- MANDATORY\_NOT\_FOUNDHTTP 400



You have not specified the mandatory key "\_\_composite\_requests", or given a null value.

**Resolution:** Input a valid JSON array in this key.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



"rollback\_on\_fail" and "parallel\_execution" keys cannot be true in the same request.

**Resolution:** Specify the value of either of the keys as false, according to your requirement.

- INVALID\_DATAHTTP 400



You have used more than 5 sub-requests.

**Resolution:** You can only use a maximum of 5 sub-requests for a composite API.


#### Sample Response

``` json
Copied{
  "__composite_requests": [\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-12T23:43:25-11:00",\
            "Content-Disposition": "attachment; filename=response.json",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4751295",\
            "clientsubVersion": "a27707afc2e1d00d9d9f62aa55194b04"\
          },\
          "status_code": 201,\
          "body": {\
            "data": [\
              {\
                "code": "SUCCESS",\
                "details": {\
                  "Modified_Time": "2022-02-12T22:43:32-11:00",\
                  "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                  },\
                  "Created_Time": "2022-02-12T22:43:32-11:00",\
                  "id": "554023000002365002",\
                  "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                  }\
                },\
                "message": "record added",\
                "status": "success"\
              }\
            ]\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-12T23:43:25-11:00",\
            "Content-Disposition": "attachment; filename=response.json",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4751295",\
            "clientsubVersion": "a27707afc2e1d00d9d9f62aa55194b04"\
          },\
          "status_code": 200,\
          "body": {\
            "data": [\
              {\
                "code": "SUCCESS",\
                "details": {\
                  "Modified_Time": "2022-02-12T22:43:32-11:00",\
                  "Modified_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                  },\
                  "Created_Time": "2022-02-12T22:43:32-11:00",\
                  "id": "554023000002365002",\
                  "Created_By": {\
                    "name": "Patricia Boyle",\
                    "id": "554023000000235011"\
                  }\
                },\
                "message": "record updated",\
                "status": "success"\
              }\
            ]\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-12T23:43:25-11:00",\
            "Content-Disposition": "attachment; filename=response.json",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4751295",\
            "clientsubVersion": "a27707afc2e1d00d9d9f62aa55194b04"\
          },\
          "status_code": 200,\
          "body": {\
            "data": [\
              {\
                "Company": "ABC",\
                "Email": null,\
                "Last_Name": "Boyle",\
                "id": "554023000002365002",\
                "$canvas_id": null\
              }\
            ]\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-12T23:43:25-11:00",\
            "Content-Disposition": "attachment; filename=response.json",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4751295",\
            "clientsubVersion": "a27707afc2e1d00d9d9f62aa55194b04"\
          },\
          "status_code": 200,\
          "body": {\
            "data": [\
              {\
                "Last_Name": "Boyle",\
                "id": "554023000002365002"\
              },\
              {\
                "Last_Name": "Max",\
                "id": "554023000001736019"\
              },\
              {\
                "Last_Name": "Deborah Grogan",\
                "id": "554023000001054002"\
              },\
              {\
                "Last_Name": "Leads test",\
                "id": "554023000000948001"\
              }\
            ],\
            "info": {\
              "per_page": 25,\
              "count": 4,\
              "page": 1,\
              "more_records": false\
            }\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-12T23:43:25-11:00",\
            "Content-Disposition": "attachment; filename=response.json",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4751295",\
            "clientsubVersion": "a27707afc2e1d00d9d9f62aa55194b04"\
          },\
          "status_code": 200,\
          "body": {\
            "data": [\
              {\
                "Last_Name": "Max",\
                "id": "554023000001736019",\
                "$canvas_id": null\
              }\
            ]\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    }\
  ]
}
```

Show full

Show less

#### Possible Errors For the sub-requests

- MANDATORY\_NOT\_FOUND



You have not specified the mandatory key in one of the sub-requests, the data type is not consistent with the field, or not compliant with the regex.

**Resolution:** Input all manadatory values for every sub-request following the regex. Make sure the data type of the input matches with the field's.

- INVALID\_DATA



You have specified an invalid sub\_request\_id

**Resolution:** Specify a valid sub\_request\_id. The accepted regex is _\[a-zA-Z0-9\]\[a-zA-Z0-9\_\]\*_.

- INVALID\_DATA



You have specify an invalid value for one of the keys

**Resolution:** Specify valid values for all the keys. Refer to the sample input section for more details.

- DUPLICATE\_DATA



You have specified the same sub\_request\_id for more than one sub\_request

**Resolution:** Specify unique sub\_request\_id for all sub-requests.

- NOT\_ALLOWED



You have specified a version higher than that of the composite API's for one or more sub-requests in their URLs

**Resolution:** Specify a version equal to or less than that of the composite API for all the sub-requests.

- NOT\_SUPPORTED



You have tried to invoke an API that is not supported by composite API

**Resolution:** Refer to the supported APIs section above for the list of allowed APIs in a composite request.

- LIMIT\_EXCEEDED



You have exceeded the limit in the sub-request

**Resolution:** There are restrictions on the number of records that you can create, update, or delete in a composite request. Refer to the "Allowed APIs" section for the limits applicable to each API.

- INVALID\_REFERENCE



You have given an improper reference in the request body

**Resolution:** Refer to the notes section and sample input section for details on how to give a proper reference.

- INVALID\_REFERENCE



The response used in the given reference does not have a proper value

**Resolution:** Specify a valid reference.

- INVALID\_REFERENCE



You have given a reference which is yet to be executed

**Resolution:** This error is thrown for sequential execution ("parallel\_execution" is false). Arrange the sub-requests so that the reference can be given properly.

- INVALID\_REFERENCE



The given reference refers to the same sub-request as it is referred to in

**Resolution:** Give a reference from another sub-request.

- INVALID\_REFERENCE



The sub-request referred to in the reference has failed

**Resolution:** This error is thrown for parallel execution ("parallel\_execution" is true). You can only use successful sub-requests as references.

- LOOPING\_FOUND



The sub-requests are referring to each other

**Resolution:** This error is thrown for parallel execution ("parallel\_execution" is true). Sub-requests cannot have references to each other. Specify the references such that there is no looping.

- ROLLBACK\_PERFORMED



The sub-request was rolled back because another sub-request in the composite API has failed

**Resolution:** This error is thrown only when "rollback\_on\_fail" is true. Make the necessary corrections so that the failed API can be successful.

- PROCESSING\_STOPPED



The sub-request was rolled back because another sub-request in the composite API has failed

**Resolution:** This error is thrown only when "rollback\_on\_fail" is true and there were unexecuted sub-requests when the transaction was rolled back. Make the necessary corrections so that the failed API can be successful.

- REQUEST\_TIMEOUT



The execution time taken to complete all the sub-requests in parallel has exceeded the default timeout period of five minutes

**Resolution:** Check the network for connectivity issues, or other reasons for execution time exceeding five minutes. The already triggered sub-request may be successfully executed in the back-end, even if this error is populated.

- REQUEST\_TIMEOUT



This error is thrown when connection time-out occurs during NIO flow and CRM is yet to receive the request

**Resolution:** This error is thrown for parallel execution ("parallel\_execution" is true). Check the network for connectivity issues.

- INTERNAL\_ERROR



Internal server error

**Resolution:** Contact your system administrator or the support team.


### Status Codes for a Composite Request

The following are the status codes in the response of a composite request.

- When **"rollback\_on\_fail" is true**:
  - Status code is **400**, when a rollback is performed (one or all the sub-requests failed).
  - Status code is **200**, when a rollback is not performed.
- When **"rollback\_on\_fail" is false**:
  - Status code is **400**, when none of the sub-requests is triggered.
  - Status code is **207**, when a few of the sub-requests are triggered.
  - Status code is **200**, when all the sub-requests are triggered. Note that a composite request is considered a success when all the sub-requests are triggered, irrespective of the success or failure of each of these sub-requests.

#### Sample input when rollback\_on\_fail is "true"

``` json
Copied{
  "rollback_on_fail": true,
  "parallel_execution": false,
  "__composite_requests": [\
    {\
      "sub_request_id": "1",\
      "method": "POST",\
      "uri": "/crm/v6/Leads",\
      "headers": {},\
      "body": {\
        "data": [\
          {\
            "Last_Name": "Sam"\
          }\
        ]\
      }\
    },\
    {\
      "sub_request_id": "2",\
      "params": {\
        "fields": "Last_Name,Company,Email",\
        "per_page": "3",\
        "page": "1",\
        "ids": "@{1:$.data[0].details.id}"\
      },\
      "method": "GET",\
      "uri": "/crm/v6/Leads"\
    },\
    {\
      "sub_request_id": "3",\
      "method": "GET",\
      "uri": "/crm/v6/Leads",\
      "params": {\
        "fields": "Last_Name,Company,Email",\
        "page": 1\
      },\
      "body": {\
        "data": [\
          {\
            "Last_Name": "Sam"\
          }\
        ]\
      }\
    },\
    {\
      "sub_request_id": "4",\
      "method": "POST",\
      "body": {\
        "select_query": "select Last_Name from Leads where Last_Name is not null limit 26"\
      },\
      "uri": "/crm/v6/coql"\
    },\
    {\
      "sub_request_id": "5",\
      "method": "GET",\
      "params": {\
        "fields": "Last_Name,Company,Email"\
      },\
      "uri": "crm/v6/Leads"\
    }\
  ]
}
```

Show full

Show less

#### Sample Response for a rollback

``` json
Copied{
  "__composite_requests": [\
    {\
      "code": "ROLLBACK_PERFORMED",\
      "details": {\
        "rollbacked_by_sub_request_index": 3\
      },\
      "message": "the transaction was rolled back since another sub request in the same transaction failed.",\
      "status": "error"\
    },\
    {\
      "code": "ROLLBACK_PERFORMED",\
      "details": {\
        "rollbacked_by_sub_request_index": 3\
      },\
      "message": "the transaction was rolled back since another sub request in the same transaction failed.",\
      "status": "error"\
    },\
    {\
      "code": "ROLLBACK_PERFORMED",\
      "details": {\
        "rollbacked_by_sub_request_index": 3\
      },\
      "message": "the transaction was rolled back since another sub request in the same transaction failed.",\
      "status": "error"\
    },\
    {\
      "code": "SUCCESS",\
      "details": {\
        "response": {\
          "headers": {\
            "X-ACCESSTOKEN-RESET": "2022-02-02T11:43:59+05:30",\
            "X-Content-Type-Options": "nosniff",\
            "Content-Disposition": "attachment; filename=response.json",\
            "X-Download-Options": "noopen",\
            "content-type": "application/json;charset=utf-8",\
            "clientVersion": "4725537",\
            "clientsubVersion": "1fbb2cd4aec39c18e65a4eebcff5a8cc"\
          },\
          "status_code": 400,\
          "body": {\
            "code": "LIMIT_EXCEEDED",\
            "details": {\
              "by": "limit",\
              "limit": 25\
            },\
            "message": "limit exceeded",\
            "status": "error"\
          }\
        }\
      },\
      "message": "composite sub request executed successfully",\
      "status": "success"\
    },\
    {\
      "code": "PROCESSING_STOPPED",\
      "details": {\
        "rollbacked_by_sub_request_index": 3\
      },\
      "message": "the transaction was rolled back since another sub request in the same transaction failed.",\
      "status": "error"\
    }\
  ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/composite-api.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)