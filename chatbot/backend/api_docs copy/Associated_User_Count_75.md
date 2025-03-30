
# Associated User Count

#### Purpose

To retrieve the count of users under the territories in your organization.

#### Endpoints

[GET /territories/actions/associated\_users\_count](https://www.zoho.com/crm/developer/docs/api/v7/associated-user-count.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories/actions/associated\_users\_count

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.All

(and)

scope=ZohoCRM.users.All

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories/actions/associated_users_count"
-X GET
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

#### Response JSON Keys

- countnumber



Represents the number of users associated to the territory.

- territoryJSON Object



Represents the name and ID of the territory.


#### Sample Response

``` json
Copied{
    "associated_users_count": [\
        {\
            "count": "1",\
            "territory": {\
                "name": "Zoho",\
                "id": "431581000000272796"\
            }\
        },\
        {\
            "count": "2",\
            "territory": {\
                "name": "Chennai",\
                "id": "431581000000744113"\
            }\
        },\
        {\
            "count": "1",\
            "territory": {\
                "name": "Chennai-South",\
                "id": "431581000000744125"\
            }\
        },\
        {\
            "count": "1",\
            "territory": {\
                "name": "Chennai North",\
                "id": "431581000000744137"\
            }\
        },\
        {\
            "count": "1",\
            "territory": {\
                "name": "Parent",\
                "id": "431581000000744159"\
            }\
        },\
        {\
            "count": "1",\
            "territory": {\
                "name": "Child",\
                "id": "431581000000744169"\
            }\
        },\
        {\
            "count": "1",\
            "territory": {\
                "name": "Chennai Leads",\
                "id": "431581000000744183"\
            }\
        }\
    ],
    "info": {
        "per_page": 200,
        "count": 7,
        "page": 1,
        "more_records": false
    }
}
```

Show full

Show less

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/associated-user-count.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)