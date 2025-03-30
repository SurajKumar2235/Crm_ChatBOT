
# Execute Scoring Rules

Scoring rules for a module can be executed by the scoring rule ids or using the layout id. All scoring rules must correspond to the same module when using the scoring rule ids. All active rules for the specified layout will be executed if executed by layout id. If there is no request body, all active rules for the specified module will be scheduled for execution. The rules will be applied to records that were created or had their most recent activity time within the last 6 months.

#### Purpose

To execute scoring rules for a module in the organization.

#### Endpoints

[PUT /{module\_api\_name}/actions/run\_scoring\_rules](https://www.zoho.com/crm/developer/docs/api/v7/execute-scoring-rules.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/{module\_api\_name}/actions/run\_scoring\_rules

#### Supported modules

Leads, Accounts, Contacts, Deals and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.scoring\_rules.ALL

(or)

scope=ZohoCRM.settings.scoring\_rules.{operation\_type}

#### Possible operation types

ALL - Full access to scoring rules

Update - Execute scoring rules

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/Leads/actions/run_scoring_rules"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT
-d @executerules.json
```

### Scoring Rule execution using Rule IDs

Scoring rules can be scheduled to be executed, using the scoring rule IDs. In this case, all the scoring rules must belong to the same module. Upto five active rules can be executed using this method.

#### Input JSON Keys

- scoring\_rulesJSON array, mandatory



Represents the unique IDs of the scoring rules to be executed.


#### Sample Input

``` json
Copied{
    "scoring_rules" : [\
        "4876876000000965604",\
        "4876876000000945002"\
    ]
}
```

### Scoring Rule execution using Layout ID

If you want to execute all active scoring rules for a specific layout of a module, you can do so by specifying the layout ID in the input body.

#### Input JSON Keys

- layoutJSON object, mandatory



Represents the unique ID of the of the layout for which the scoring rules are to be executed.


#### Sample Input

``` json
Copied{
    "layout" : {
            "id" :"4876876000000091055"
    }
}
```

#### Possible Errors

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to request URL section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** Client does not have the required scope. Create a new client with valid scope. Refer to scope section above for more details.

- NO\_PERMISSIONHTTP 403



Permission denied to execute

**Resolution:** The user does not have permission to execute scoring rules. Contact your system administrator.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



You have specified both Layout ID and Scoring Rule ID in the input body.

**Resolution:** Specify either the layout ID or Scoring Rule IDs to be executed.

- INVALID\_DATAHTTP 400



Scoring Rule Id or Layout Id seems to be invalid

**Resolution:** Please specify valid rule id or layout id for execution.

- INVALID\_DATAHTTP 400



Module name seems to be invalid

**Resolution:** Please specify a valid and supported module name in the request URL.

- INVALID\_DATAHTTP 400



Given ID does not belong the specified module

**Resolution:** Specify Scoring Rules corresponding to the specified module.

- INVALID\_DATAHTTP 400



More than 5 active scoring rules are given for execution

**Resolution:** Limit the number of rules to be executed to 5 when executing by Rule Ids.

- CANNOT\_PERFORM\_ACTIONHTTP 400



The specified module has no Scoring Rules for any layout

**Resolution:** Please create Scoring Rules or specify another valid module.


#### Sample Response

``` json
CopiedExecution by Layout ID:
{
    "code": "SCHEDULED",
    "details": {
        "job_id": "4876876000000984011"
    },
    "message": "The scoring rules of the specified layout successfully scheduled to run",
    "status": "success"
}

Execution by Scoring Rule ids:
{
    "scoring_rules": [\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "4876876000000984013"\
            },\
            "message": "scoring rules successfully scheduled to run",\
            "status": "success"\
        },\
        {\
            "code": "SCHEDULED",\
            "details": {\
                "job_id": "4876876000000984013"\
            },\
            "message": "scoring rules successfully scheduled to run",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/execute-scoring-rules.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)