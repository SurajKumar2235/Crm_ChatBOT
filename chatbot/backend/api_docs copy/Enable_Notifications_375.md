
# Enable Notifications

#### Purpose

To enable instant notifications of actions performed on a module.

#### Endpoints

[POST /actions/watch](https://www.zoho.com/crm/developer/docs/api/v7/notifications/enable.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/actions/watch

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Appointments Rescheduled History, Services, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.notifications.{operation\_type}

#### Possible operation types

ALL - Full access to notification data

WRITE - Edit instant notification details

CREATE - Enable instant notifications

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/actions/watch"
-X POST
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@inputData.json"
```

#### Input JSON Keys

- tokenString, optional



This value is sent back in the callback to ensure that the notification is from Zoho CRM. The maximum character length is 50.

**Possible values:** Example: TOKEN\_FOR\_VERIFICATION\_OF\_1000000068001

- notify\_urlString, mandatory



The URL to be notified (POST request) about the action that took place in the module.

**Possible values:** String values. Example: https://www.zoho.com/callback?authorization=Zoho-oauthtoken 1000.23dnsbbbh455jnn&key1=val1&key2=val2

- channel\_idlong, mandatory



The given value is sent back in callback URL body to make sure that the notification is for a particular channel.

**Possible values:** Channel ID. Example: 1000000068001

- channel\_expiryString (ISO Date time), optional



Represents the expiry time for instant notifications. The value can be a maximum of one week from the time they are enabled. If it is not specified or set for more than a week, the default expiry time is for one hour.

**Possible values:** ISO Date time. Example: 2023-02-02T10:30:00+05:30

- return\_affected\_field\_valuesboolean, optional



It returns the updated fields and their corresponding values to the specified notify\_url.

- eventsJSONArray, mandatory



To subscribe based on particular operations on selected modules.

**Possible values:** JSON Array of the format _\["{module\_api\_name}.{operation}", "{module\_api\_name}.{operation}"\]_. Example: \["Leads.create","Sales\_Orders.edit","Contacts.delete","users.all"\]. Possible operation types - create, delete, edit, all

- notification\_conditionJSONArray, optional



To raise a notification only when an event occurs on certain fields of the module.

This array contains the following keys:



- **type** \- string, mandatory - Indicates that a notification is raised based on field updates. The value is **field\_selection**.
- **module** \- JSON object, mandatory - The API name and ID of the module on whose field events you want to receive notifications.
- **field\_selection** \- JSON object, mandatory - Contains a maximum of two objects with each object having the following keys:
  - **group\_operator** \- string, mandatory - The supported operators are **and** and **or**. You can group the fields using these operators.
  - **group** \- JSON array, mandatory - Every **field** JSON object contains the API name and ID of the field in the module. You will receive a notification whenever any action happens on these fields based on their group operator.

    **Note:** You can have a maximum of **10 fields** in the _group_ array, irrespective of how you have grouped them.

- notify\_on\_related\_actionboolean, optional



To enable notification when there is any action on any associated records. The default value is TRUE.


**To get notification on a URL**

- On trigger of any notification-enabled event in a module, Zoho CRM sends a notification to the user through the notify URL.

#### Sample Input

``` json
Copied{
    "watch": [\
        {\
            "channel_id": "10000",\
            "events": [\
                "Deals.all"\
            ],\
            "notification_condition": [\
                {\
                    "type": "field_selection",\
                    "module": {\
                        "api_name": "Deals",\
                        "id": "554023000000000131"\
                    },\
                    "field_selection": {\
                        "group_operator": "or",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "Stage",\
                                    "id": "554023000000000525"\
                                }\
                            },\
                            {\
                                "group_operator": "and",\
                                "group": [\
                                    {\
                                        "field": {\
                                            "api_name": "Account_Name",\
                                            "id": "554023000000000523"\
                                        }\
                                    },\
                                    {\
                                        "field": {\
                                            "api_name": "Lead_Source",\
                                            "id": "554023000000000535"\
                                        }\
                                    }\
                                ]\
                            }\
                        ]\
                    }\
                }\
            ],\
            "channel_expiry": "2023-12-31T09:58:09+05:30",\
            "token": "deals.all.notif",\
            "return_affected_field_values": true,\
            "notify_url": "https://webhook.site/2c9a0xxc20fa9"\
        }\
    ]
}
```

#### Possible Errors

- MANDATORY\_NOT\_FOUND HTTP 400



One of the mandatory fields (events, channel\_id, notify\_url, type, module) is not found. Refer to the "details" key in the response to know which mandatory field is missing.

**Resolution:** Ensure that all the mandatory fields are given in the input.

- INVALID\_DATA HTTP 400



The length of the token is greater than 50 characters.

**Resolution:** Ensure that the token passed is less than 50 characters in length.

- INVALID\_DATA HTTP 400



**Reasons:**



- You have passed invalid data with invalid data type in the request body. The "details" key in the response gives you the JSON path to the invalid data.
- You have given an invalid value to the **type** key in the _notification\_condition_ array.
- You have given an invalid module name in the _notification\_condition_ array.
- You have given an unsupported operator in the **group\_operator** key.
- You have given an invalid field API name in the _notification\_condition_ array.
- There are more than two objects in the **field\_selection** object.
- You have passed invalid data or data of the wrong data type in one or more objects of the **group** array.
- The **group** array has more than 10 fields.

**Resolutions:**

- Refer to the sample to construct the request body.
- The value of the **type** key in the _notification\_condition_ array is **field\_selection**.
- Refer to the _Supported modules_ section for the list of modules that this API can be used for.
- The supported operators are **and** and **or** for the **group\_operator** key.
- Specify a valid field API name in the _notification\_condition_ array. Refer to the [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) to get the field API names.
- The **field\_selection** object can have a maximum of two objects only.
- The **group** key must be a JSON array of fields with valid field API names and IDs. Refer to the sample input.
- The **group** array can have a maximum of 10 fields, irrespective of their grouping.

- EXPECTED\_FIELD\_MISSING HTTP 400



You have not specified one or more of the expected fields such as the module API name or ID in the request body.

**Resolution:** Refer to the "details" key in the response to find out the JSON path of the missing key and include it int he request body.

- AMBIGUITY\_DURING\_PROCESSING HTTP 400



The module API name and it's ID do not match in the **notification\_condition** array.

**Resolution:** Refer to the "details" key in the response to find out the ambiguous key. Use the [Module Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the API name and ID of the module.

- DEPENDENT\_FIELD\_MISSING HTTP 400



You have specified the **field\_selection** key in the input but not the **type** key.

**Resolution:** The **type** key is mandatory in the **notification\_condition** array, when you have included the **field\_selection** key.


#### Sample Response

``` json
Copied{
    "watch": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "events": [\
                    {\
                        "channel_expiry": "2023-08-02T16:59:50-11:00",\
                        "resource_uri": "https://www.zohoapis.com/crm/v2/Deals",\
                        "resource_id": "554023000000000131",\
                        "resource_name": "Deals",\
                        "channel_id": "10000"\
                    }\
                ]\
            },\
            "message": "Successfully subscribed for actions-watch of the given module",\
            "status": "success"\
        }\
    ]
}
```

#### Response JSON Keys

- serverinteger



Represents the server time when the notification was sent to the notify URL.

- query\_paramsJSON object



Represents the parameters if any were specified in the notification URL.

- resource\_uriJSON object



Represents the URI of the module you have specified to receive notifications when certain actions are performed in the module.

- idsJSON array



Represents the unique IDs of the affected records.

- affected\_fieldsJSON array



Returns the updated or modified fields and their corresponding values to the specified notify\_url.

- operationstring



Represents the operation performed on the module.

- modulestring



Represents the module name from which you want to be notified of any changes.

- channel\_idlong, mandatory



The given value is sent back in callback URL body to make sure that the notification is for a particular channel.

- tokenstring



Represents the value is sent back in the callback to ensure that the notification is from Zoho CRM.


#### Sample response received at the notification URL

``` json
Copied{
  "server_time": 1718117126473,
  "query_params": {},
  "module": "Leads",
  "resource_uri": "https://www.zohoapis.com/crm/v2/Leads",
  "ids": [\
    "5725767000003000064"\
  ],
  "affected_fields": [],
  "operation": "insert",
  "channel_id": "1000000068001",
  "token": "TOKEN_FOR_VERIFICATION_OF_1000000068001"
}

```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/notifications/enable.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)