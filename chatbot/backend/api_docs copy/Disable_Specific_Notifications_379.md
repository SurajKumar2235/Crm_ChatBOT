
# Disable Specific Notifications

#### Purpose

To disable notifications for the specified events in a channel.

#### Endpoints

[PATCH /actions/watch](https://www.zoho.com/crm/developer/docs/api/v7/notifications/specific-disable.html)

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
Copiedhttps://www.zohoapis.com/crm/v7/actions/watch"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-X PATCH
-d "@inputData.json"
```

In the request, "@inputData.json" contains the sample input data.

#### Input JSON Keys

- \_delete\_eventsboolean, mandatory



To specify whether to disable specific notifications.

- channel\_idlong, mandatory



The given value is sent back in notification URL body to make sure that the notification is for a particular channel.

**Possible values:** Channel ID. Example: 1000000068001

- eventsJSONArray\["{module\_api\_name}.{operation}", "{module\_api\_name}.{operation}"\], mandatory



To subscribe based on particular operations on selected modules.

**Possible values:** JSON Array of the provided format. Example: \["Leads.create","Sales\_Orders.edit","Contacts.delete"\]. Possible operation types - create, delete, edit, all

- notify\_on\_related\_actionboolean, optional



To enable or disable notification when there is any action on any associated records. The default value is TRUE.


**Note**

- **\_delete\_events key** is mandatory to disable specific notifications. If **"\_delete\_events": false** or **\_delete\_events** key is not given in the input, instant notifications will not be disabled.
- **channel\_id** and **events** keys are also mandatory.

#### Sample Input

``` json
Copied{
    "watch": [\
       {\
            "channel_id": "10000",\
            "events": [\
                "Contacts.delete"\
            ],\
            "_delete_events": true\
        }\
    ]
}
```

#### Sample Response

``` json
Copied{
    "watch": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "events": [\
                    {\
                        "resource_uri": "https://www.zohoapis.com/crm/v2/Contacts",\
                        "resource_id": "554023000000000129",\
                        "resource_name": "Contacts",\
                        "channel_id": "10000"\
                    }\
                ]\
            },\
            "message": "Successfully removed the subscribe details",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/notifications/specific-disable.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)