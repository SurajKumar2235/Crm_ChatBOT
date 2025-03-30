
# Get Records through a COQL Query

#### Purpose

To get the records from the module through a COQL query.

#### Endpoints

[POST /coql](https://www.zoho.com/crm/developer/docs/api/v7/Get-Records-through-COQL-Query.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/coql

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.coql.READ

(and)

scope=ZohoCRM.modules.{operation\_type}

(or)

scope=ZohoCRM.modules.{module\_name}.{operation\_type}

**Note:** Use the **ZohoCRM.settings.fields.READ** scope to **retrieve fields metadata**. Without this scope, the system will throw an **OAUTH\_SCOPE\_MISMATCH** error.

#### Possible module names

leads, accounts, contacts, users, deals, campaigns, tasks, cases, events, calls, solutions, products, vendors, pricebooks, quotes, salesorders, purchaseorders, invoices, and custom

#### Possible operation types

ALL - Full data access

READ - Get module data

**Note**

- Although you "get" records from the module, the HTTP method is POST as you "post" the query. Refer to [Query API - An Overview](https://www.zoho.com/crm/developer/docs/api/v7/COQL-Overview.html) to learn how to construct a COQL query.
- When you use a module's API name in the query, prefix an **!** to differentiate between a module's and field's API name. For example, _!Leads.Owner.role.id_.
- Encrypted numeric fields support **=**, **!=**, **is null** and **is not null**.
- Encrypted fields are supported in the SELECT column and in the WHERE clause.
- Encrypted non-numeric fields support only **is null** and **is not null**.
- **Tuple** is not supported in COQL.
- The **"full\_name"** field contains the concatenated values of the **First Name** and **Last Name** fields.

This is a read-only field available only in the Leads, Contacts, and Users modules.
- **Formula field:**

To include a formula field in your query, ensure you use only the supported comparators to retrieve information. The available comparators may vary based on the return type of the formula field. The table below outlines the supported comparator based on the return type:



| Formula Field's Return type | Field Data Type<br>supported comparators |
| --- | --- |
| Decimal, Date, DateTime, Number | =, !=, >=, >, <=, <, between, not between, in, not in, is null, is not null |
| String (text) | =, !=, like(used for starts\_with, ends\_with, contains), not like(used for not\_contains), in, not in, is null, is not null |
| Boolean | is null, is not null, equals |


#### Request JSON

- select\_queryJSON key, mandatory



Represents that the input is a select query.


#### Sample Request

CurlDeluge

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/coql"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

``` deluge
CopiedqueryMap = Map();
queryMap.put("select_query", "select Last_Name, First_Name, Full_Name from Contacts where Last_Name = 'Boyle' and First_Name is not null limit 2");
response = invokeurl
[\
	url :"https://www.zohoapis.com/crm/v7/coql"\
	type :POST\
	parameters: queryMap.toString()\
	connection:"crm_oauth_connection"\
];
info response;
```

In the request, "@input.json" contains the sample input data.

#### Field Types and their Comparators

The following sections describe the field types and their allowed comparators in the COQL query with an example each.

- #### Text, Picklist




**=**, **!=**, **like**(used for starts\_with, ends\_with, contains), **not like**(used for not\_contains), **in**, **not in**, **is null**, **is not null**.


**Note**

The **%** wildcard can be used with the **like** operator to achieve functionalities similar to the **contains, starts\_with,** and **ends\_with** operators. For instance, '%tech' queries for field values ending with 'tech', 'C%' queries for values starting with 'C', and '%tech%' translates to contains 'tech'.

Please note that for the **Not Like** operator, it only works if you give '%' at both ends (not contains). Using '%' only at the beginning (not starting with) or at the end (not ending with) doesn't work.

The valid cases are:

- like "%tech" - ends with 'tech'
- like "%tech%" - contains 'tech'
- like "tech%" - starts with 'tech'
- not like "%tech%" - does not contain 'tech'

#### Sample Query

``` json
Copied{
 "select_query" : "select Last_Name, First_Name, Full_Name, Lead_Source, Languages_Known
                  from Contacts
                 where (((Last_Name = 'Boyle') and (Lead_Source = Advertisement)) and Languages_Known = 'English;German') limit 2"
}
```

#### Response JSON Keys

- First\_Namestring



Represents the first name of the contact.

- Last\_Namestring



Represents the last name of the contact.

- Full\_Namestring



Represents the full name of the contact.

- idstring



Represents the unique ID of the contact.

- Languages\_KnownJSON array



Represents the values selected in the multi-select picklist.

- Lead\_Sourcestring



Represents the value selected in the picklist.


#### Sample Response

``` json
Copied{
  "data": [\
    {\
      "First_Name": "Patricia",\
      "Full_Name": "Patricia Boyle",\
      "Last_Name": "Boyle",\
      "Languages_Known": [\
        "English",\
        "German"\
      ],\
      "Lead_Source": "Advertisement",\
      "id": "554023000000310003"\
    },\
    {\
      "First_Name": "Steve",\
      "Full_Name": "Steve Boyle",\
      "Last_Name": "Boyle",\
      "Languages_Known": [\
        "English",\
        "German"\
      ],\
      "Lead_Source": "Advertisement",\
      "id": "554023000000310012"\
    }\
  ],
  "info": {
    "count": 2,
    "more_records": false
  }
}
```

Show full

Show less

- #### Lookup




**=**, **!=**, **in**, **not in**, **is null**, **is not null**.



**Note:** When you query a lookup field, the response only contains the ID of the field. To get the name of the field, you must include the field\_API\_name in the query.


#### Sample Query

``` json
Copied{
    "select_query": "select Last_Name, First_Name, Full_Name, Account_Name
    from Contacts
    where
    ((Last_Name = 'Boyle') and (First_Name is not null)) and (Account_Name.Account_Name = 'Zylker')
    limit 2"
}
```

In this query, the join is established through the lookup field **Account\_Name** in the Contacts module.

#### Response JSON Keys

- Account\_Name.Account\_Namestring



Here, Account\_Name returns the ID of the account and Account\_Name.Account\_Name returns the account name of the account that the contact is associated with.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": "Patricia",\
            "Full_Name": "Patricia Boyle",\
            "Vendor_Name": {\
                "id": "554023000000310037"\
            },\
            "Last_Name": "Boyle",\
            "Account_Name.Account_Name": "Zylker",\
            "Account_Name": {\
                "id": "554023000000238116"\
            },\
            "id": "554023000000310003"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": true
    }
}
```

Show full

Show less

#### Sample query with two relations (joins)

_select Last\_Name, Account\_Name.Parent\_Account, **Account\_Name.Parent\_Account.Account\_Name** from Contacts where Last\_Name is not null and **Account\_Name.Parent\_Account.Account\_Name** is not null_

In this query, two joins are established using the lookup field **Account\_Name** in the Contacts module and another lookup field **Parent\_Account** in the Accounts module.

#### Sample Query

``` json
Copied{
 "select_query" : "select Last_Name, Account_Name.Parent_Account, Account_Name.Parent_Account.Account_Name
                  from Contacts
                  where Last_Name is not null and Account_Name.Parent_Account.Account_Name is not null"
}
```

#### Response JSON Keys

- Account\_Name.Parent\_Account.Account\_Namestring



Here, the relation Account\_Name.Parent\_Account returns the ID of the parent account of the account associated with the contact. The relation Account\_Name.Parent\_Account.Account\_Name returns the name of the parent account of the account associated with the contact.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account_Name.Parent_Account.Account_Name": "Zylker",\
            "Last_Name": "Boyle",\
            "Account_Name.Parent_Account": {\
                "id": "554023000000238121"\
            },\
            "id": "554023000000310003"\
        },\
        {\
            "Account_Name.Parent_Account.Account_Name": "Zylker",\
            "Last_Name": "Patricia",\
            "Account_Name.Parent_Account": {\
                "id": "554023000000238121"\
            },\
            "id": "554023000000310012"\
        }\
    ],
    "info": {
        "count": 2,
        "more_records": false
    }
}
```

Show full

Show less

#### Sample query with User/Owner Lookup Field

_select Last\_Name, First\_Name, Full\_Name, Owner from Contacts where Last\_Name = 'Boyle' and **Owner** = '554023000000235011' limit 3_

In this query, **Owner** is the lookup field in the Contacts module. This query fetches records from the contacts module with the specified last name and whose owner id is 554023000000235011.

#### Sample Query

``` json
Copied{
 "select_query" : "select Last_Name, First_Name, Full_Name, Owner
                  from Contacts
                  where Last_Name = 'Boyle' and Owner = '554023000000235011'
                  limit 3"
}
```

#### Response JSON Keys

- OwnerJSON object



Represents the unique ID of the record owner.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": "Patricia",\
            "Full_Name": "Patricia Boyle",\
            "Owner": {\
                "id": "554023000000235011"\
            },\
            "Last_Name": "Boyle",\
            "id": "554023000000310003"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

Show full

Show less

- #### Date, DateTime, Number




**=**, **!=**, **>=**, **>**, **<=**, **<**, **between**, **not between**, **in**, **not in**, **is null**, **is not null**.





**Note**



Using the **DateTime** field, you can filter records based on any timezones.


#### Sample Query

``` json
Copied{
    "select_query": "select Last_Name,Days_Visited, Created_Time, Date_of_Birth, Modified_Time from Contacts where (((Created_Time between '2023-05-28T04:25:36-07:00' and '2025-05-28T04:25:36-07:00') and Date_of_Birth between '2022-03-04' and '2025-07-11') and (Modified_Time in('2024-06-05T02:04:09-07:00','2024-07-03T00:00:01+05:30') and Days_Visited is null)) limit 1"
}
```

#### Response JSON Keys

- Created\_TimeDate Time in ISO 8601 format



Represents the date and time at which the record was created.

- Modified\_TimeDate Time in ISO 8601 format



Represents the date and time at which the record was modified.

- Days\_VisitedNumber



Number of days the lead or contact visited your customer's website.

- Annual\_RevenueCurrency



Represents the last name of the record.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Modified_Time": "2024-06-05T02:04:09-07:00",\
            "Date_of_Birth": "2024-06-05",\
            "Days_Visited": null,\
            "Last_Name": "Boyle",\
            "Created_Time": "2024-05-28T04:25:36-07:00",\
            "id": "5725767000002889886"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

Show full

Show less

- Boolean



**=**


#### Sample Request

``` json
Copied{
 "select_query" : "select Last_Name, First_Name, Full_Name, Email_Opt_Out
                  from Contacts
                  where Email_Opt_Out = 'true'
                  limit 2"
}
```

#### Response JSON Keys

- Email\_Opt\_OutBoolean



Represents the email preference of the contact.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": "Patricia",\
            "Full_Name": "Patricia Boyle",\
            "Email_Opt_Out": true,\
            "Last_Name": "Boyle",\
            "id": "554023000000310003"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

#### Sample query with multiple conditions in where clause

To prevent ambiguity, the criteria listed in the WHERE clause must be properly enclosed in brackets. If WHERE has more than two criteria such as A, B, and C, use them as either of the following:

- (A and (B and C))
- ((A and B) and C)
- A and (B and C)
- (A and B) and C.

#### Sample Query

``` json
Copied{
 "select_query" : "select Last_Name, First_Name, Full_Name, Lead_Source from Contacts where (((First_Name = 'Kris') and Lead_Source = 'Trade Show') and Department = 'Engineering')  "
}
```

- #### What\_Id(multi-module lookup) Support




**=**, **!=**, **in**, **not in**, **is null**, **is not null**.



The What\_Id support is applicable **only** for **Tasks**, **Calls**, and **Events**. While using What\_Id to retrieve records in COQL, the associated record may be one of several different types of records. For example, the What\_Id field of a Task may be a Lead or a Contact.


#### Sample Query

``` json
Copied{
 "select_query": "select 'What_Id->Leads.Last_Name','What_Id->Accounts.Account_Type' from Events where id is not null"
}

```

#### Response JSON Keys

- What\_Id->Leads.Last\_NameString



Represents last name of the Lead for whom the activity (Task, Call, Event) was created.

- What\_Id->Accounts.Account\_TypeString



Represents account type of the associated account for which the activity (Task, Call, Event) was created.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "What_Id->Leads.Last_Name": "Sam",\
            "What_Id->Accounts.Account_Type":"Partner",\
            "id": "5725767000000420632"\
        },\
        {\
            "What_Id->Leads.Last_Name": "Jane",\
            "What_Id->Accounts.Account_Type": "Vendor",\
            "id": "5725767000000420633"\
        }\
    ],
    "info": {
        "count": 2,
        "more_records": true
    }
}
```

Show full

Show less

#### Querying Multi Module Lookup

``` json
Copied{
 "select_query": "select 'Appointment_For->Contacts.Lead_Source' from Appointments__s where id is not null"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Appointment_For->Contacts.Lead_Source": "Advertisement",\
            "id": "5725767000003971003"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

#### Querying Multi-module Lookup Module Name

To know the modules associated with each record for **"Appointment\_For"** field in the **Appointments** module.

#### Sample Query

``` json
Copied{
"select_query": "select Appointment_For.module.api_name,Appointment_For from Appointments__s where id is not null"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Appointment_For": {\
                "module": {\
                    "api_name": "Contacts",\
                    "id": "5725767000000002179"\
                },\
                "id": "5725767000003581048"\
            },\
            "id": "5725767000003971003",\
            "Appointment_For.module.api_name": "Contacts"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

Show full

Show less

- #### Roles and Profiles support




**=**, **!=**, **in**, **not in**, **is null**, **is not null**.



You can fetch the details of the owner's **profile** such as ID, name, created\_by, modified\_by, description, created\_time, modified\_time and the details of the owner's **role** such as ID, name, reporting\_to, share\_data\_with\_peers, description from a module.


#### Sample Query

``` json
Copied{
    "select_query": "select Owner.profile.id,Owner.profile.name,Owner.profile.created_by,Owner.profile.modified_by,Owner.profile.description,Owner.profile.created_time,Owner.profile.modified_time from Contacts where Last_Name is not null limit 2"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner.profile.id": "3652397000000026011",\
            "Owner.profile.modified_by": null,\
            "Owner.profile.description": "crm.security.profile.admin.desc",\
            "Owner.profile.created_by": null,\
            "Owner.profile.modified_time": null,\
            "Owner.profile.created_time": null,\
            "id": "3652397000000190181",\
            "Owner.profile.name": "Administrator"\
        },\
        {\
            "Owner.profile.id": "3652397000000026011",\
            "Owner.profile.modified_by": null,\
            "Owner.profile.description": "crm.security.profile.admin.desc",\
            "Owner.profile.created_by": null,\
            "Owner.profile.modified_time": null,\
            "Owner.profile.created_time": null,\
            "id": "3652397000000190182",\
            "Owner.profile.name": "Administrator"\
        }\
    ],
    "info": {
        "count": 2,
        "more_records": true
    }
}
```

Show full

Show less

- #### Alias support




**=**, **!=**, **in**, **not in**, **is null**, **is not null**.



You can now fetch the details of a record through the alias "as" in the select query. For example, in the Contacts module, **'Account\_Name' AS 'Account id'** in the select query fetches the ID of the Account the contact is associated with in the field "Account id" in the response. Refer to the sample input section for more such aliases.

Note that you can only use alias in the select columns and the "order\_by" clause.


#### Sample Query

``` json
Copied{
    "select_query":"select 'Account_Name' AS 'Account id','Account_Name.Account_Name' as 'Account Name','Account_Name.Parent_Account' as 'Parent Account id','Account_Name.Parent_Account.Account_Name' As 'Parent Account Name' from Contacts where (Account_Name.Account_Name ='Zylker') order by Account_Name desc limit 2"
}
```

#### Response JSON Keys

- Account idJSON Object



Represents the ID of the Account the contact is associated with.

- Account NameString



Represents the name of the Account the contact is associated with.

- Parent Account idJSON Object



Represents the ID of the parent account the contact's account is associated with.

- idString



Represents the ID of the contact.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account id": {\
                "id": "3652397000000624046"\
            },\
            "Account Name": "Zylker",\
            "Parent Account id": {\
                "id": "3652397000000190102"\
            },\
            "Parent Account Name": "King",\
            "id": "3652397000000269089"\
        },\
        {\
            "Account id": {\
                "id": "3652397000000624046"\
            },\
            "Account Name": "Zylker",\
            "Parent Account id": {\
                "id": "3652397000000190102"\
            },\
            "Parent Account Name": "King",\
            "id": "3652397000000649013"\
        }\
    ],
    "info": {
        "count": 2,
        "more_records": true
    }
}
```

Show full

Show less

- ### Sample Query using External ID




You can use the external field of a module in the select query and the "where" clause. In this example, External\_Account\_ID is the API name of the external field in the Accounts module.


#### Sample Query

``` json
Copied{
    "select_query":"select Account_Name, External_Account_ID, Parent_Account.Account_Name, Parent_Account.External_Account_ID from Accounts where Parent_Account.External_Account_ID = 'ZylkerExternal'"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Parent_Account.Account_Name": "Zylker",\
            "Parent_Account.External_Account_ID": "ZylkerExternal",\
            "Account_Name": "Account 2",\
            "id": "3652397000000714002",\
            "External_Account_ID": null\
        },\
        {\
            "Parent_Account.Account_Name": "Zylker",\
            "Parent_Account.External_Account_ID": "ZylkerExternal",\
            "Account_Name": "ExtAccounttest",\
            "id": "3652397000010110022",\
            "External_Account_ID": "externalaccount1"\
        }\
    ],
    "info": {
        "count": 2,
        "more_records": false
    }
}
```

Show full

Show less

### Aggregate Function

You can now use the aggregate functions SUM, MIN, MAX, AVG, and COUNT in the select query. The following sections give an example for each of the supported aggregate functions. Note that aggregate functions are case-sensitive.

**Note**

Duplicate aggregate fields in a query will result in a **"DUPLICATE\_DATA"** error in the response.

```
{
"select_query" : "select COUNT(De1), COUNT(De1) from Leads where id is not null"
}
```

- #### SUM




Use this function to sum up the values of an aggregate field in a module. This sample query fetches the total annual revenue generated from the leads whose individual annual revenue is greater than 1000.


#### Sample Query

``` json
Copied{
    "select_query":"select SUM(Annual_Revenue), Company, Last_Name from Leads where Annual_Revenue >= 1000 Group by Company, Last_Name"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Company": "abc",\
            "Last_Name": "Lead_changed",\
            "SUM(Annual_Revenue)": 100000\
        },\
        {\
            "Company": "Creative Business Inc",\
            "Last_Name": "Kitzman",\
            "SUM(Annual_Revenue)": 100000\
        },\
        {\
            "Company": "Dal Tile Corporation",\
            "Last_Name": "Frey",\
            "SUM(Annual_Revenue)": 200000\
        },\
        {\
            "Company": "Grayson",\
            "Last_Name": "Tjepkema",\
            "SUM(Annual_Revenue)": 170000\
        },\
        {\
            "Company": "Kwik Kopy Printing",\
            "Last_Name": "Merced",\
            "SUM(Annual_Revenue)": 700000\
        },\
        {\
            "Company": "Morlong Associates",\
            "Last_Name": "Sweely",\
            "SUM(Annual_Revenue)": 190000\
        }\
    ],
    "info": {
        "count": 6,
        "more_records": false
    }
}
```

Show full

Show less

- #### MAX




This function gives the maximum value of an aggregate field. The sample query uses this function to fetch the maximum annual revenue of leads that belong to the Company "ABC".


#### Sample Query

``` json
Copied{
    "select_query": "select MAX(Annual_Revenue), Last_Name, Company from Leads where Annual_Revenue > 1000 Group by Last_Name, Company"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Company": "Dal Tile Corporation",\
            "Last_Name": "Frey",\
            "MAX(Annual_Revenue)": 200000\
        },\
        {\
            "Company": "Creative Business Inc",\
            "Last_Name": "Kitzman",\
            "MAX(Annual_Revenue)": 100000\
        },\
        {\
            "Company": "abc",\
            "Last_Name": "Lead_changed",\
            "MAX(Annual_Revenue)": 100000\
        },\
        {\
            "Company": "Kwik Kopy Printing",\
            "Last_Name": "Merced",\
            "MAX(Annual_Revenue)": 700000\
        },\
        {\
            "Company": "Morlong Associates",\
            "Last_Name": "Sweely",\
            "MAX(Annual_Revenue)": 190000\
        },\
        {\
            "Company": "Grayson",\
            "Last_Name": "Tjepkema",\
            "MAX(Annual_Revenue)": 170000\
        }\
    ],
    "info": {
        "count": 6,
        "more_records": false
    }
}
```

Show full

Show less

- #### MIN




This function gives the minimum value of an aggregate field. The sample query uses this function to fetch the minimum annual revenue of leads that belong to the Company "ABC".


#### Sample Query

``` json
Copied{
    "select_query":"select MIN(Annual_Revenue) from Leads where Annual_Revenue != 0"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "MIN(Annual_Revenue)": 100000\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

- #### AVG




Use this function to get the average value of the values of a field. This sample query fetches the average annual revenue generated from the leads.


#### Sample Query

``` json
Copied{
    "select_query":"select AVG(Annual_Revenue) from Leads where Annual_Revenue != 0"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "AVG(Annual_Revenue)": 243333.33333333334\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

- #### COUNT




Use the **COUNT** function to get the number of records that satisfy the criteria in the select query.



The sample query retrieves the count of lead records with annual revenue over **25,000**. The records are grouped based on the lead source using the **group by** clause. For example, you can see that there are two records with annual revenue over 25,000 whose lead source is "Online Store". Similarly, for the lead source "Advertisement", there are two records with annual revenue greater than 25,000.

Note that you can use this aggregate function only for **number**, **lookup**, and **picklist** fields.


#### Sample Query

``` json
Copied{
"select_query": "select COUNT(Annual_Revenue), Lead_Source from Leads where Annual_Revenue >25000 group by Lead_Source"
}

```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "COUNT(Annual_Revenue)": 3,\
            "Lead_Source": null\
        },\
        {\
            "COUNT(Annual_Revenue)": 1,\
            "Lead_Source": "Seminar Partner"\
        },\
        {\
            "COUNT(Annual_Revenue)": 2,\
            "Lead_Source": "Online Store"\
        },\
        {\
            "COUNT(Annual_Revenue)": 1,\
            "Lead_Source": "Partner"\
        },\
        {\
            "COUNT(Annual_Revenue)": 1,\
            "Lead_Source": "External Referral"\
        },\
        {\
            "COUNT(Annual_Revenue)": 1,\
            "Lead_Source": "Web Download"\
        },\
        {\
            "COUNT(Annual_Revenue)": 2,\
            "Lead_Source": "Advertisement"\
        },\
        {\
            "COUNT(Annual_Revenue)": 1,\
            "Lead_Source": "Cold Call"\
        }\
    ],
    "info": {
        "count": 8,
        "more_records": false
    }
}
```

Show full

Show less

- ### Sample query to retrieve data using CVID




Filter and retrieve records based on Custom Views.


#### Sample Query

``` json
Copied{
    "select_query" : "select First_Name from Leads#2276164000000091501 WHERE id is not null"
}
//CVID: 2276164000000091501 - This is the Custom View ID in the Leads module.
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "First_Name": "Paul",\
            "id": "5725767000000706007"\
        },\
        {\
            "First_Name": "Brian",\
            "id": "5725767000000706008"\
        },\
        {\
            "First_Name": "Patricia",\
            "id": "5725767000002889877"\
        }\
    ],
    "info": {
        "count": 3,
        "more_records": false
    }
}
```

Show full

Show less

- ### Sample query to retrieve field metadata




You can retrieve the **metadata** of the **fields** specified in the **SELECT** column by using the **include\_meta** key.


**Note**

To retrieve fields metadata, the **ZohoCRM.settings.fields.READ** scope is mandatory. Without this scope, the system will throw an **OAUTH\_SCOPE\_MISMATCH** error.

#### Sample Query

``` json
Copied{
    "select_query": "select Last_Name from Leads where Last_Name is not null",
    "include_meta": [\
        "fields"\
    ]
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Last_Name": "Kitzman",\
            "id": "5725767000000420480"\
        },\
        {\
            "Last_Name": "Patricia Boyle",\
            "id": "5725767000003581010"\
        }\
    ],
    "fields": {
        "Last_Name": {
            "webhook": true,
            "operation_type": {
                "web_update": true,
                "api_create": true,
                "web_create": true,
                "api_update": true
            },
            "colour_code_enabled_by_system": false,
            "field_label": "Last Name",
            "tooltip": null,
            "type": "used",
            "table_name": "CrmLeadDetails",
            "field_read_only": false,
            "required": true,
            "customizable_properties": null,
            "display_label": "Last Name",
            "read_only": false,
            "association_details": null,
            "multi_module_lookup": {},
            "id": "5725767000000002595",
            "created_time": null,
            "filterable": true,
            "visible": true,
            "refer_from_field": null,
            "view_type": {
                "view": false,
                "edit": true,
                "quick_create": true,
                "create": true
            },
            "separator": false,
            "searchable": true,
            "external": null,
            "api_name": "Last_Name",
            "unique": {},
            "enable_colour_code": false,
            "pick_list_values": [],
            "system_mandatory": true,
            "private": null,
            "virtual_field": false,
            "json_type": "string",
            "crypt": null,
            "created_source": "default",
            "display_type": -1,
            "ui_type": 127,
            "modified_time": null,
            "quick_sequence_number": "3",
            "email_parser": {
                "fields_update_supported": false,
                "record_operations_supported": true
            },
            "currency": {},
            "custom_field": false,
            "lookup": {},
            "hipaa_compliance": null,
            "convert_mapping": {
                "Contacts": "Last_Name",
                "Deals": null,
                "Accounts": null
            },
            "rollup_summary": {},
            "length": 80,
            "column_name": "LASTNAME",
            "display_field": false,
            "pick_list_values_sorted_lexically": false,
            "default_value": null,
            "sortable": true,
            "layout_associations": [\
                {\
                    "api_name": "Standard__s",\
                    "name": "Standard",\
                    "id": "5725767000000091055"\
                },\
                {\
                    "api_name": "Zoho",\
                    "name": "Zoho",\
                    "id": "5725767000000526001"\
                },\
                {\
                    "api_name": "testing_layout",\
                    "name": "testing layout",\
                    "id": "5725767000002256035"\
                }\
            ],
            "global_picklist": null,
            "history_tracking": null,
            "data_type": "text",
            "formula": {},
            "additional_column": null,
            "hipaa_compliance_enabled": false,
            "decimal_place": null,
            "multiselectlookup": {},
            "auto_number": {}
        }
    },
    "info": {
        "count": 200,
        "more_records": true
    }
}
```

Show full

Show less

- ### Sample query to fetch data using territory fields




To retrieve **territories** associated with records in a module, specify the field API names in the **SELECT** column.



**Supported modules:** Accounts, Contacts, Leads and Deals.









**Note**



The territory field API names differ by module:



- Accounts, Contacts, and Leads - Territories
- Deals - Territory

#### Sample Query

``` json
Copied{
    "select_query" : "select Territories, Account_Name.Territories from Contacts where id is not null"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Account_Name.Territories": [\
                {\
                    "name": "USA",\
                    "id": "5725767000000454003"\
                }\
            ],\
            "id": "5725767000000420261",\
            "Territories": [\
                {\
                    "name": "USA",\
                    "id": "5725767000000454003"\
                }\
            ]\
        },\
        .\
        .\
        .\
    ],
    "info": {
        "count": 170,
        "more_records": false
    }
}
```

Show full

Show less

- ### Sample query to fetch lookup fields




From V7, the **display name** is available for **Lookup** and **User** **Lookup** **fields** when you specify them in the **SELECT** column, but it is not available for **Consent** **Lookup** and **Multi-Module Lookup (MML)** fields.

Please note, for the **Users** module, only the **"last\_name"** is shown as the display field for the **Users** module is **last\_name**.


#### Sample Query

``` json
Copied{
"select_query": "select Account_Name, Owner, Data_Processing_Basis_Details from Contacts where Data_Processing_Basis_Details is not null"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Owner": { //user lookup field\
                "name": "Boyle",\
                "id": "5725767000000411001"\
            },\
            "Account_Name": { //lookup field\
                "name": "Zoho",\
                "id": "5725767000003464060"\
            },\
            "Data_Processing_Basis_Details": { //consent lookup field\
                "id": "5725767000005083039"\
            },\
            "id": "5725767000005091053"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}

```

Show full

Show less

- ### Consent Lookup




To retrieve information from the **Consent** module via **Consents** **Lookup**, ensure that [GDPR](https://help.zoho.com/portal/en/kb/crm/security-control/compliance-setting/gdpr/articles/gdpr-introduction#Zoho_as_a_Data_Processor) is enabled and the required modules are properly configured. For more details, refer to the [Consent Managemen](https://help.zoho.com/portal/en/kb/crm/security-control/compliance-setting/gdpr/articles/consent-management#Best_Practices_for_Consent_Management) t documentation.



**Note:**

Once GDPR is enabled and configured for a module, a new **Data Processing Basis Details field** will be created in the respective module with the data type **consent\_lookup ("data\_type": "consent\_lookup")**. You can retrieve these details using the [GET Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html). To fetch the **Consents** module's fields, make a [GET Fields Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/field-meta.html) call to the **Consents** module.


#### Sample Query

``` json
Copied{
    "select_query": "select Data_Processing_Basis_Details.Contact_Through_Email,Data_Processing_Basis_Details.Data_Processing_Basis from Leads where Data_Processing_Basis_Details is not null"
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Data_Processing_Basis_Details.Data_Processing_Basis": "Consent - Pending",\
            "Data_Processing_Basis_Details.Contact_Through_Email": true,\
            "id": "5725767000002841001"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

- ### Sample query to retrieve data using a Profile Image ID




You can use a record image's ID to fetch related data. For example, if you only have a record image's ID and want to retrieve the respective record's last name, you can include the record image ID in your query.



#### Retrieving the Profile Image ID using COQL:



To retrieve the unique IDs of the Record Image field for different records in a module, use the below query:



```
{"select_query": "select Record_Image from Leads where Record_Image is not null"}
```





This will return the Record Image ID for each record in the module.



**Note:**

You can download the image using the [GET - Files API](https://www.zoho.com/crm/developer/docs/api/v7/get-files.html) by specifying the profile image field ID, which can be retrieved using the query above.


#### Sample Query

``` json
Copied{
    "select_query": "select Last_Name, Record_Image from Leads where Record_Image in ('siwz79472749456ff433f8b88d0a795ae9855') "
}
```

#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Record_Image": "siwz79472749456ff433f8b88d0a795ae9855",\
            "Last_Name": "Kitzman",\
            "id": "5725767000000420480"\
        }\
    ],
    "info": {
        "count": 1,
        "more_records": false
    }
}
```

- ### Sample query using the rollup summary field




Supported comparators for the rollup summary are  **"="**, **"!="**, **">="**, **">"**, **"<="**, **"<"**, **"between"**, **"not between"**, **"in"**, **"not in"**, **"is null"** and **"is not null"**.


**Note**

From **V7**, the response for the **Date** and **Datetime** return types of the Rollup Summary field will be provided in their respective formats.

#### Sample Query

``` json
Copied{
    "select_query": "select Last_Note_Added, Last_Note_Added_On from Leads where id is not null "
}
```

#### Possible Errors

- SYNTAX\_ERRORHTTP 400



The query does not contain either proper criteria, base table, or the **where** clause.

**Resolution:** Form a query with proper criteria, base table, and the where clause.

- SYNTAX\_ERRORHTTP 400



The query does not contain the **from** clause.

**Resolution:** Form a query with the from clause.

- SYNTAX\_ERRORHTTP 400



The request contains a query other than select.

Example: "select\_query" : "update Leads set Last\_Name = 'Last' where id = 12356".

**Resolution:** You can only use the Select statement in your select query.

- SYNTAX\_ERRORHTTP 400



Parsing is happening for so long for the given query. please validate the query.

**Resolution:** The given query is either too complex or has unbalanced parentheses. Please specify a valid and optimized query.

- LIMIT\_EXCEEDEDHTTP 400



The value of limit clause or the select column (field API names) has exceeded the maximum limit of 200 and 50, respectively.

**Resolution:** You can fetch only a maximum of 200 records and 50 fields in a single API call.

- LIMIT\_EXCEEDEDHTTP 400



The query has more than two joins.

Example: "select\_query" : "select Account\_Name.Account\_Name, Account\_Name.Parent\_Account.Account\_Name, Vendor\_Name.Vendor\_Name from Contacts where Lead\_Source = Advertisement"

**Resolution:** You can only have a maximum of two joins in a select query.

- LIMIT\_EXCEEDEDHTTP 400



You have specified more than 50 values for the "in" or "not in" comparators of the select query.

**Resolution:** You can specify only a maximum of 50 values for the "in" or "not in" comparators.

- LIMIT\_EXCEEDEDHTTP 400



Max records limit exceeded

**Resolution:** You can use pagination and fetch only up to 10,000 records using a COQL query.

- LIMIT\_EXCEEDEDHTTP 400



You have specified more than 100 values for the "in" or "not in" comparator of the SELECT column in the query

**Resolution:** You can specify only a maximum of 100 values for the "in" or "not in" comparator.

- LIMIT\_EXCEEDEDHTTP 400



- The number of fields in the ORDER BY clause exceeds the allowed limit

**Resolution:** Ensure that the number of fields specified in the ORDER BY clause does not exceed the allowed limit of **10 fields**.
- The field count in the GROUP BY clause has exceeded its limit

**Resolution:** Ensure and specify the number of fields in the **GROUP BY** clause is within the allowed limit. Allowed limit is **four** fields.
- The number of aggregate fields in the query has exceeded the limit

**Resolution:** A maximum of **five aggregate fields** are allowed in the query.

- INVALID\_QUERYHTTP 400



The query contains an invalid column name (field\_API\_name).

Example: "select Last\_Name, Testing from Leads where Last\_Name is not null"

**Resolution:** Provide a valid field API name.

- INVALID\_QUERYHTTP 400



The query contains unsupported data type.

Example: "select Last\_Name, Contacts from Leads where Last\_Name is not null"

Here, Contacts is a multi-select lookup field and not supported in COQL.

**Resolution:** Provide field API names with valid data type.

- INVALID\_QUERYHTTP 400



The data type of the value of the select column is invalid.

Example: "select\_query" : "select Last\_Name from Leads where Last\_Name is not null and No\_of\_Employees = 'adfkahfd'"

Here, the expected data type for No\_of\_Employees is a number, whereas the value given is a string.

**Resolution:** Provide the values of the select column corresponding to its data type.

- INVALID\_QUERYHTTP 400



The query contains an invalid operator.

Example: "select\_query" : "select Last\_Name from Leads where Last\_Name is not null and Last\_Name >= 'adfkahfd'" **Resolution:** Use only those operators that are accepted by the respective fields.

- INVALID\_QUERYHTTP 400



- The value given in the include\_meta key seems to be invalid

**Resolution:** Specify a valid value for the include\_meta key. The supported value is **fields**.
- The datatype given for the fields in the include\_meta key is invalid

**Resolution:** Specify a valid datatype for the fields key. The supported datatype is **text**.
- Invalid datatype for the include\_meta key

**Resolution:** Specify a valid datatype. Supported datatype is **JSON array**.

- INVALID\_QUERYHTTP 400



Territory fields only supported in the SELECT clause

**Resolution:** Specify the territory fields only in the SELECT column.

- INVALID\_QUERYHTTP 400



The CVID provided in the query is invalid

**Resolution:** Specify a valid custom view ID in the query. Get your custom view IDs using the [Custom Views Metadata API](https://www.zoho.com/crm/developer/docs/api/v7/custom-view-meta.html)

- INVALID\_ALIASHTTP 400



The alias name cannot be an empty string

Example: "select Account\_Name 'Account\_as','Account\_Name.Account\_Name' \\" \\"

**Resolution:** Provide a valid alias.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



User does not have the required scope to access the module.

**Resolution:** Contact your administrator to obtain the required permission.

- DUPLICATE\_DATAHTTP 401



The query contains duplicate select columns (field\_API\_names). Example: "select\_query" : "select Last\_Name, First\_Name, Full\_Name, Created\_Time, Full\_Name from Contacts where Lead\_Source = Advertisement limit 2"

Here, the query contains Full\_Name twice.

**Resolution:** Ensure that there are no duplicate select columns in the query.

- DUPLICATE\_ALIASHTTP 400



The same alias cannot refer to more than one select column

**Resolution:** Ensure that you use unique alias for each select column .

- DUPLICATE\_DATAHTTP 400



- The query contains duplicate fields in the ORDER BY clause
- The number of fields in the ORDER BY clause exceeds the allowed limit

**Resolution:** Ensure that there are no duplicate fields in the **ORDER BY** and **GROUP BY** clauses of your query.

- The query contains duplicate aggregate fields

**Resolution:** Do not duplicate aggregate fields in the query.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in Server. Contact support team.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to endpoints section above.


#### Sample Response

``` json
Copied{
    "data": [\
        {\
            "Last_Note_Added": "2023-06-16T00:09:43-07:00",\
            "id": "5725767000000678203",\
            "Last_Note_Added_On": "2023-06-16T00:09:43-07:00"\
        },\
        {\
            "Last_Note_Added": "2023-12-18T05:23:06-08:00",\
            "id": "5725767000001639024",\
            "Last_Note_Added_On": "2023-12-18T05:23:06-08:00"\
        }\
        {\
            "Last_Note_Added": "2024-07-04T03:49:48-07:00",\
            "id": "5725767000003160016",\
            "Last_Note_Added_On": "2024-07-04T03:49:48-07:00"\
        },\
        {\
            "Last_Note_Added": "2024-07-18T04:39:30-07:00",\
            "id": "5725767000003357053",\
            "Last_Note_Added_On": "2024-07-18T04:39:30-07:00"\
        },\
        {\
            "Last_Note_Added": "2024-07-19T08:09:37-07:00",\
            "id": "5725767000003357059",\
            "Last_Note_Added_On": "2024-07-19T08:09:37-07:00"\
        },\
        .\
        .\
        .\
    ],
    "info": {
        "count": 200,
        "more_records": true
    }
}
```

#### Further Reading

- [Kaizen #80 - COQL API - Part I](https://help.zoho.com/portal/en/community/topic/kaizen-80-coql-api-part-i-7-4-2023)
- [Kaizen #81 - COQL API - Part II](https://help.zoho.com/portal/en/community/topic/kaizen-81-coql-api-part-ii)
- [Kaizen #124 - Manipulating Subform using Zoho CRM APIs.](https://help.zoho.com/portal/en/community/topic/kaizen-124-accessing-subform-using-zoho-crm-apis)
- [Kaizen #1](https://help.zoho.com/portal/en/community/topic/kaizen-125-manipulating-multi-select-lookup-fields-mxn-using-zoho-crm-apis) [25 -](https://www.zoho.com/crm/developer/docs/api/v7/Get-Records-through-COQL-Query.html#125) [Manipulating Multi-Select Lookup fields (MxN) using Zoho CRM APIs.](https://help.zoho.com/portal/en/community/topic/kaizen-125-manipulating-multi-select-lookup-fields-mxn-using-zoho-crm-apis)
- [Kaizen #171 - Frequently Asked Questions on COQL API](https://help.zoho.com/portal/en-gb/community/topic/kaizen-171-faqs-on-coql-api)

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/Get-Records-through-COQL-Query.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)