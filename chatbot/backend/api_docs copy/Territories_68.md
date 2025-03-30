
# Add Territories

#### Purpose

To add  new territories to your organization.

#### Endpoints

[POST /settings/territories](https://www.zoho.com/crm/developer/docs/api/v7/add-territories.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/territories

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.territories.{operation\_type}

#### Possible operation types

ALL - Full access to territories

CREATE - To create territories

#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/territories"
-X POST
-d "@addterritories.json"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
```

In the request, "@addterritories.json" contains the sample input data.

#### Input JSON

- name string, mandatory



Represents the name of the territory.

- reporting\_to JSON Object, mandatory



Represents the ID of the parent territory. This can be obtained from [GET Territories API](https://www.zoho.com/crm/developer/docs/api/v7/territories.html)

- manager JSON Object, optional



Represents the manager details of the territory.You can give ID of the manager of the territory.Use the [Get Users API](https://www.zoho.com/crm/developer/docs/api/v7/get-users.html) to get the ID of the user you want to set as manager of the territory.

- permission\_type string, mandatory



Represents the type of permission for the territory. Valid values are read\_only and read\_write\_delete.

- description string, optional



Represents the description of the territory.

- account\_rule\_criteria JSON Object, optional



Represents the criteria for Account module territory rules.



  - comparator string, optional



    Represents the comparison operator for the account rule criteria (e.g., greater\_than, less\_than).

  - fieldJSON Object, optional



    Represents the field details for the account rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the account rule criteria.

    - id string, optional



      Represents the unique ID of the field for the account rule criteria.This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html).
  - value string, optional



    Represents the value to compare with for the account rule criteria.
- lead\_rule\_criteria JSON Object, optional



Represents the criteria for lead rules in the territory.



  - comparator string, optional



    Represents the comparison operator for the lead rule criteria (e.g., greater\_than, less\_than).

  - field JSON Object, optional



    Represents the field details for the lead rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the lead rule criteria.

    - id string, optional



      Represents the unique ID of the field for the lead rule criteria. This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)
  - value string, optional



    Represents the value to compare with for the lead rule criteria.
- deal\_rule\_criteria JSON Object, optional



Represents the criteria for deal rules in the territory.



  - comparator string, optional



    Represents the comparison operator for the deal rule criteria (e.g., greater\_than, less\_than).

  - field JSON Object, optional



    Represents the field details for the deal rule criteria.



    - api\_name string, optional



      Represents the API name of the field for the deal rule criteria.

    - id string, optional



      Represents the unique ID of the field for the deal rule criteria.This can be obtained from [Field Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html)
  - value string, optional



    Represents the value to compare with for the deal rule criteria.

**Note**

The following section describe field types and their allowed comparators

- **Text, Picklist, Lookup**

equal, not\_equal, contains, not\_contains, starts\_with, ends\_with

- Date literals supported and their comparators
  - **Date literal** TODAY TOMORROW TOMORROWPLUS(Starting tomorrow) YESTERDAY AGEINDAYS AGEINDAYS EMPTY **Comparator** equal
  - **Date literal** YESTERDAYMINUS(Till yesterday) **Comparator** less\_equal
  - **Date literal** NOTEMPTY **Comparator** not\_equal
  - **Date literal** LASTMONTH THISMONTH NEXTMONTH LASTWEEK THISWEEK LASTYEAR THISYEAR NEXTYEAR PREVFQ (FQ - Financial Quarter) THISFQ NEXTFQ PREVFY (FY - Financial Year)THISFY NEXTFY **Comparator** between
- Maximum number of rules supported in each criteria are 25
- Maximum number of territories that can be created in your organization depends upon the version of CRM
- Maximum number of territories that can be added in one API call is 10

#### Sample Input

``` json
Copied{
  "territories": [\
    {\
      "name": "Territory1000",\
      "reporting_to": {\
        "id": "431581000000272796"\
      },\
      "manager": {\
        "id": "431581000000258001"\
      },\
      "permission_type": "read_only",\
      "description": null,\
      "account_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Annual_Revenue",\
          "id": "431581000000000625"\
        },\
        "value": "1001"\
      },\
      "lead_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Annual_Revenue",\
          "id": "431581000000000893"\
        },\
        "value": "1000"\
      },\
      "deal_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Amount",\
          "id": "431581000000000799"\
        },\
        "value": "100000"\
      }\
    },\
    {\
      "name": "Territory1001",\
      "reporting_to": {\
        "id": "431581000000272796"\
      },\
      "manager": {\
        "id": "431581000000258001"\
      },\
      "permission_type": "read_only",\
      "account_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Annual_Revenue",\
          "id": "431581000000000625"\
        },\
        "value": "10001"\
      },\
      "lead_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Annual_Revenue",\
          "id": "431581000000000893"\
        },\
        "value": "10000"\
      },\
      "deal_rule_criteria": {\
        "comparator": "greater_than",\
        "field": {\
          "api_name": "Amount",\
          "id": "431581000000000799"\
        },\
        "value": "1000000"\
      }\
    }\
  ]
}
```

#### Possible Errors

- DUPLICATE\_DATA HTTP 400



- The territory name given in the request body already exists
- There are duplicate territory names with in the request body.

**Resolution:** Specify a unique value for territory name for different territories in the body.

- MANDATORY\_NOT\_FOUND HTTP 400



The keys name, reporting\_to and permission\_type are mandatory parameters.

**Resolution:** Give a valid json request including all mandatory parameters.

- INVALID\_DATA HTTP 400



- The parent territory ID is invalid
- The permission\_type is invalid
- The reporting\_to ID is invalid
- The manager ID is invalid
- The territory name is invalid. The special characters ^ ~ \` # % & + = \[ \] { } \| \ ; " ' < > , are not allowed.
- The given Criteria is not a valid JSON

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

- TERRITORY\_NOT\_ENABLEDHTTP 403



Territory feature is not enabled

**Resolution:** Try to enable territory feature.

- TERRITORY\_DISABLEDHTTP 403



Territory feature is not enabled

**Resolution:** Try to enable territory feature.

- LIMIT\_EXCEEDEDHTTP 400



- Maximum Territory limit reached
- Maximum Users Limit reached for a territory
- Maximum Territory Criteria Limit reached

**Resolution:** Refer to the "details" key in the response for the API name of the field that has the error in the input.

#### Sample Response

``` json
Copied{
    "territories": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000734292"\
            },\
            "message": "Territory Created Successfully",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "431581000000734310"\
            },\
            "message": "Territory Created Successfully",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/add-territories.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)