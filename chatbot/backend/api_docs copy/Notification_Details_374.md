
# Get Notification Details

#### Purpose

To get the details of the notifications enabled by the user.

#### Endpoints

[GET /actions/watch](https://www.zoho.com/crm/developer/docs/api/v7/notifications/get-details.html)

### Request Details

#### Request URL

{api-domain}crm/{version}/actions/watch

#### Supported modules

Leads, Accounts, Contacts, Deals, Campaigns, Tasks, Cases, Meetings, Calls, Solutions, Products, Vendors, Price Books, Quotes, Sales Orders, Purchase Orders, Invoices, Appointments, Appointments Rescheduled History, Services, and Custom

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.notifications.{operation\_type}

#### Possible operation types

ALL - Full access to the record

READ - Get notification details

#### Parameters

- pageInteger, optional



To get the list of records from the respective pages. Default value is **1**.

**Possible values:** Integer values. Example: 1(or)4(or)6

- per\_pageInteger, optional



To get the list of records available per page. Default value is 200.

**Possible values:** Integer values. Example: 200(or)400

- channel\_idInteger, mandatory



Specify the unique ID of the notification channel.

**Possible values:** Channel ID. Example: 1000000068001

- modulestring, optional



Specify the API name of the module for which the notification is enabled.

**Possible values:** Module API names. Example: Leads


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/actions/watch"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

**Note**

- Use the **page** and **per\_page** parameter to fetch records according to their position in the CRM. Let's assume that the user has to fetch 400 records. The maximum number of records that one can get for an API call is 200. So, for records above the 200th position, they cannot be fetched. By using the page (1, 2, 3 and 4) and per\_page (100) parameter, the user can fetch all 400 records using 4 API calls.

#### Sample Response

``` curl
Copied{
    "watch": [\
        {\
            "notify_on_related_action": false,\
            "channel_expiry": "2023-08-02T16:51:03-11:00",\
            "return_affected_field_values": false,\
            "resource_uri": "https://www.zohoapis.com/crm/v2/Leads",\
            "resource_id": "554023000000000125",\
            "notify_url": "https://webhook.site/2c9xxx0fa9",\
            "resource_name": "Leads",\
            "fields": null,\
            "notification_condition": [\
                {\
                    "field_selection": {\
                        "group_operator": "and",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "Last_Name",\
                                    "id": "554023000000000559"\
                                },\
                                "group_operator": null,\
                                "group": null\
                            },\
                            {\
                                "field": {\
                                    "api_name": "Full_Name",\
                                    "id": "554023000000000597"\
                                },\
                                "group_operator": null,\
                                "group": null\
                            }\
                        ]\
                    },\
                    "module": {\
                        "api_name": "Leads",\
                        "id": "554023000000000125"\
                    },\
                    "type": "field_selection"\
                }\
            ],\
            "channel_id": "1000000068001",\
            "events": [\
                "Leads.edit",\
                "Leads.create",\
                "Leads.delete"\
            ],\
            "token": "xyz"\
        },\
        {\
            "notify_on_related_action": false,\
            "channel_expiry": "2023-08-11T02:12:33-11:00",\
            "return_affected_field_values": false,\
            "resource_uri": "https://www.zohoapis.com/crm/v2/Contacts",\
            "resource_id": "554023000000000129",\
            "notify_url": "https://webhook.site/2c9axx20fa9",\
            "resource_name": "Contacts",\
            "fields": null,\
            "notification_condition": null,\
            "channel_id": "10000",\
            "events": [\
                "Contacts.create"\
            ],\
            "token": "deals.all.notif"\
        },\
        {\
            "notify_on_related_action": false,\
            "channel_expiry": "2023-08-11T02:13:01-11:00",\
            "return_affected_field_values": false,\
            "resource_uri": "https://www.zohoapis.com/crm/v2/Deals",\
            "resource_id": "554023000000000131",\
            "notify_url": "https://webhook.site/2c9a0xx20fa9",\
            "resource_name": "Deals",\
            "fields": null,\
            "notification_condition": [\
                {\
                    "field_selection": {\
                        "group_operator": "or",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "Stage",\
                                    "id": "554023000000000525"\
                                },\
                                "group_operator": null,\
                                "group": null\
                            },\
                            {\
                                "group_operator": "or",\
                                "group": [\
                                    {\
                                        "field": {\
                                            "api_name": "Account_Name",\
                                            "id": "554023000000000523"\
                                        },\
                                        "group_operator": null,\
                                        "group": null\
                                    },\
                                    {\
                                        "field": {\
                                            "api_name": "Lead_Source",\
                                            "id": "554023000000000535"\
                                        },\
                                        "group_operator": null,\
                                        "group": null\
                                    }\
                                ]\
                            }\
                        ]\
                    },\
                    "module": {\
                        "api_name": "Deals",\
                        "id": "554023000000000131"\
                    },\
                    "type": "field_selection"\
                }\
            ],\
            "channel_id": "10000",\
            "events": [\
                "Deals.edit",\
                "Deals.create",\
                "Deals.delete"\
            ],\
            "token": "deals.all.notif"\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 3,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/notifications/get-details.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)