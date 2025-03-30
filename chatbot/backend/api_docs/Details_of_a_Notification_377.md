
# Update Details of a Notification

#### Purpose

To update the details of the notifications enabled by a user. All the provided details would be persisted and rest of the details would be removed.

#### Endpoints

[PUT /actions/watch](https://www.zoho.com/crm/developer/docs/api/v7/notifications/update-details.html)

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

WRITE - Edit notification details

UPDATE - Update notification details

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/actions/watch"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PUT
-d "@inputData.json"
```

In the request, "@inputData.json" contains the sample input data.

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
                "Deals.all",\
                "Contacts.create"\
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
\
                            },\
                            {\
\
                                "group_operator": "and",\
                                "group": [\
                                    {\
                                        "field": {\
                                            "api_name": "Account_Name",\
                                            "id": "554023000000000523"\
                                        }\
\
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
            "token": "deals.all.notif.changed",\
            "notify_url": "https://webhook.site/2c9a0f7xxxc20fa9"\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "watch": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "events": [\
                    {\
                        "channel_expiry": "2023-08-11T02:04:14-11:00",\
                        "resource_uri": "https://www.zohoapis.com/crm/v2/Contacts",\
                        "resource_id": "554023000000000129",\
                        "resource_name": "Contacts",\
                        "channel_id": "10000"\
                    },\
                    {\
                        "channel_expiry": "2023-08-11T02:04:14-11:00",\
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

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/notifications/update-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)