
# Cadences

Cadences in Zoho CRM automates and streamlines customer follow-up processes. It enables users to create targeted, sequential communications, like emails, calls, or tasks, based on customer interactions and behaviours. Ideal for sales and marketing professionals, it maintains consistent, personalized follow-ups with leads and prospects until a desired outcome is achieved.

Refer to the [Cadences](https://help.zoho.com/portal/en/kb/crm/automate-business-processes/cadences/articles/cadences) for key features and business scenarios of Cadences.

#### Purpose

To get the details of cadences configured in your organization.

#### Endpoints

[GET /settings/automation/cadences](https://www.zoho.com/crm/developer/docs/api/v7/cadences/get-cadences.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/automation/cadences

#### Supported Modules

Leads, Contacts, Deals, Vendors, and Custom (for Enterprise and above editions)

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

ZohoCRM.settings.cadences.ALL

(or)

ZohoCRM.settings.cadences.READ

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/automation/cadences"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON

- summaryJSON object



The number of email, task, and call follow-ups available in the cadence.

- created\_timestring



The date and time(in the ISO8601 format) at which the cadence was created.

- moduleJSON object



The ID and API name of the module for which this cadence was created.

- activeboolean



The status of the cadence. **true** indicates that the configuration is active and **false** indicates that the configuration is disabled.

- execution\_detailsJSON object



- unenroll\_propertiesJSON object



The end date and type of the un-enroll configuration of the cadence.

- end\_datestring



The end date of the cadence in the ISO8601 format.

- automatic\_unenrollboolean



Represents whether the record is un-enrolled from the cadence automatically.

- execute\_everyJSON object



The time, in unit and period, that the cadence executes.


- publishedboolean



Represents whether the cadence configuration is published for the module in your org.

- typestring



Represents the type of cadence. "Custom view" indicates that the cadence is created a for a specific custom view, while "Manual enrollment" indicates that cadence is created for the manually enrolled records.

- created\_byJSON object



The unique ID and name of the user that created the cadence.

- modified\_timestring



The date and time(in the ISO8601 format) at which the cadence was modified last.

- namestring



The name of the cadence.

- modified\_byJSON object



The unique ID and name of the user that modified the cadence last.

- idstring



The unique ID of the cadence.

- custom\_viewJSON object



The unique ID and name of the custom view for which the cadence is created.

- statusboolean



Represents whether the cadence is active.


#### Possible Errors

- OAUTH\_SCOPE\_MISMATCHHTTP 401



You do not have the right scope to access this API.

**Resolution:** Create a new token with the scopes mentioned in the Scope section and try this API.

- FEATURE\_NOT\_ENABLEDHTTP 403



Feature is not supported in this edition.

**Resolution:** Contact support@zohocrm.com or upgrade your edition.

- NO\_PERMISSIONHTTP 403



You do not have the **Manage Cadences** permission to access this API.

**Resolution:** Contact your administrator to get the required permission to access the API.

- INTERNAL\_SERVER\_ERRORHTTP 500



Unhandled and unexpected exception in server.

**Resolution:** Contact support@zohocrm.com for assistance.


#### Sample Response

``` json
Copied{
    "cadences": [\
        {\
            "summary": {\
                "task_follow_up_count": 1,\
                "call_follow_up_count": 1,\
                "email_follow_up_count": 1\
            },\
            "created_time": "2024-07-17T20:38:22-0700",\
            "module": {\
                "api_name": "Contacts",\
                "id": "3652397000000002179"\
            },\
            "active": true,\
            "execution_details": {\
                "unenroll_properties": {\
                    "end_date": "",\
                    "type": "respond_email"\
                },\
                "end_date": "",\
                "automatic_unenroll": false,\
                "type": "respond_email",\
                "execute_every": {\
                    "unit": 1,\
                    "period": "hours"\
                }\
            },\
            "published": true,\
            "type": "Custom view",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "modified_time": "2024-07-17T23:01:40-0700",\
            "name": "CadenceTest1",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000017949001",\
            "custom_view": {\
                "name": "All Contacts",\
                "id": 3652397000000087529\
            },\
            "status": "active"\
        },\
        {\
            "summary": {\
                "task_follow_up_count": 0,\
                "call_follow_up_count": 0,\
                "email_follow_up_count": 1\
            },\
            "created_time": "2024-07-17T23:06:07-0700",\
            "module": {\
                "api_name": "Contacts",\
                "id": "3652397000000002179"\
            },\
            "active": false,\
            "execution_details": null,\
            "published": true,\
            "type": "Manual enrollment",\
            "created_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "modified_time": "2024-07-17T23:34:40-0700",\
            "name": "test 2",\
            "modified_by": {\
                "name": "Patricia Boyle",\
                "id": "3652397000000186017"\
            },\
            "id": "3652397000017985012",\
            "custom_view": null,\
            "status": "inactive"\
        }\
    ],
    "info": {
        "per_page": 50,
        "count": 2,
        "page": 1,
        "more_records": false
    }
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/cadences/get-cadences.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)