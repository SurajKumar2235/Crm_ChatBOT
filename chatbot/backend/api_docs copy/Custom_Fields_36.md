
# Create Custom Fields

#### Purpose

To create custom fields in a module in your Zoho CRM account.

#### Endpoints

[POST /settings/fields?module={module\_api\_name}](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html)

### Request Details

#### Request URL

{api-domain}/crm/{version}/settings/fields

#### Header

Authorization: Zoho-oauthtoken d92d4xxxxxxxxxxxxx15f52

#### Scope

scope=ZohoCRM.settings.fields.CREATE (or)

scope=ZohoCRM.settings.fields.ALL (or)

scope=ZohoCRM.settings.ALL

#### Parameter

- modulestring, mandatory



Specify the module in which you want to create custom fields, such as Leads, Contacts, etc. Use the [GET - Modules API](https://www.zoho.com/crm/developer/docs/api/v7/modules-api.html) to retrieve modules API names and IDs.


#### Sample Request

``` curl
Copiedcurl "https://www.zohoapis.com/crm/v7/settings/fields?module=Leads"
-H "Authorization: Zoho-oauthtoken 1000.8cb99dxxxxxxxxxxxxx9be93.9b8xxxxxxxxxxxxxxxf"
-d "@input.json"
-X POST
```

#### Input JSON Keys

- field\_labelstring, mandatory



It represents the unique display label of the field.

- data\_typestring, mandatory



It represents the data type of the field. See [Field Types: Data Types and Length Limits](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Field_Types) for more information on the available data types.

- lengthinteger, optional



It represents the maximum number of characters allowed for a field. Certain fields have specific character limits. See [Field Types: Data Types and Length Limits](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Field_Types) for more information.

- tooltipJSON object, optional



Represents the tooltip content for the field.

**Possible names:**

**static\_text :** Specifies that the field should have a _static text_ tootltip. The tooltip content will be displayed in the field when the user clicks on the field box.

**info\_icon :** Specifies that the field should have an _info icon_ tooltip. Clicking on the _info ico_ n will display the tooltip contents.



Note that it is mandatory to specify both the **name** and **value** when you specify tootltip key.

- profilesJSON array, optional



Each object in the array represents the name and ID of the [profile](https://www.zoho.com/crm/developer/docs/api/v7/get-profiles.html) that has access to the field. By default, all org users will have access to the field. Possible permission types: **read\_write**, **read\_only**, and **hidden**.



- **read\_write:** The user has read and write permissions for the field
- **read\_only:** The user has only read permission for the field
- **hidden:** The field is not visible to the user.

Note that it is mandatory to specify a permission type to the profiles in order to access the field.

- filterableboolean, optional



Represents whether the created field is supported in filters or not. By default, its value is true. The filterable key is supported for all datatypes except **imageupload**, **fileupload**, **textarea**, and **formula** when its **return\_type** is **text**.

- uniqueJSON object, optional



It specifies whether to mark the field as a **unique** field or not. The accepted value for **case\_sensitive** is **false.**

- cryptJSON object, optional



Represents whether to store the field's value in encrypted form or not.



The possible values are:



**encryption** \- The field's value will be stored in **encrypted** form. This is supported for the following datatypes : text, textarea, email, phone, date, datetime, integer, currency, bigint, double, and website.

**decryption** \- The field's value will **not** be stored in **encrypted** form. The **default** value is **decryption**.

- externalJSON object, optional



Represents whether to mark the field as an external field, where information about the record from a third-party application can be stored. The possible value for the **type** are: **user** \- A different external ID will be generated for each user, and **org** \- All the users in the org will have a common external ID. Refer [here](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/use-custom-fields?src=product&crmprod=1#Set_External_Field) for more information. Supported field data type is **text**.


##### **Field Types: Data Types and Length Limits**

The table below presents a list of field types, their corresponding data types, and the associated length limits:

| Field Type | Field Data Type<br>(Example: "data\_type": "text") | Number of characters allowed for a field <br>         ( Example: "length": 150) |
| --- | --- | --- |
| **Text** | text | 1 to 255 |
| **Text Area** | textarea | 2000 or 32000 or 50000 |
| **Email** | email | 1 to 100 |
| **Phone** | phone | 1 to 30 |
| **Integer** | integer | 1 to 9 |
| **Auto Number** | autonumber | 1 to 255 |
| **Currency** | currency | 1 to 16 |
| **Percent** | percent | 1 to 5 |
| **BigInt** | bigint | 1 to 18 |
| **Double** | double | 1 to 18 |
| **Website** | website | 1 to 450 |
| **File Upload** | fileupload | 1 or 5 |
| **Image Upload** | imageupload | 1 to 10 |

**Notes**

- The same sample input format is applicable to the datatypes **email** and **phone**, supporting both the **static\_text** and **info\_icon** values for the tooltip key.
- The fields will be created in your **standard layout**.
- A maximum of **five fields** can be created in a single API call.
- The **filterable** key is supported for all datatypes except **imageupload**, **fileupload**, **textarea**, and **formula** when its **return\_type** is **text**.
- The data types **email** and **textarea** do not support external fields.
- In the **tooltip** key, the **static\_text** value is limited to **35 characters**, and the **info\_icon** value is limited to **255 characters**.
- You can create a maximum of **two unique fields per module** in all the editions.
- You can create a maximum of **one Auto-Number field** in a module.
- You cannot create an external field for Calls module.
- The maximum number of custom fields possible varies depending on the CRM edition.
  - **Standard** \- Maximum of **10 fields per module**.
  - **Professional** \- Maximum of **155 fields per module**.
  - **Enterprise** \- Maximum of **300 fields per module**.
  - **Ultimate** \- Maximum of **500 fields per module**.

Please refer to this [document](https://www.zoho.com/crm/help/complete-feature-list.html) to know more about the custom fields limits based on different editions.

#### Sample Input : Field Type - Text

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Your Name",\
            "data_type": "text",  // Specify the data type as text*\
            "length": 150,\
            "filterable": true,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Enter your name"\
            },\
            "profiles": [\
                {\
                    "id": "2423488000000015972",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "2423488000000015975",\
                    "permission_type": "read_only"\
                }\
            ],\
             "external": {\
                "type": "user",\
                "show": false\
            },\
              "crypt": {\
                "mode": "decryption"\
            }\
        }\
    ]
}
```

#### Sample Response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111112000000067259"\
            },\
            "message": "field created",\
            "status": "success"\
        }\
    ]
}
```

Sample successful response for a single field creation.

#### Input JSON Keys for "Text Area" ("data\_type": "textarea")

- textareaJSON object, mandatory



It is a multi-line text area field that allows you to add additional information to the record. The following represents the possible values of _**type**_ key, along with its allowed characters.



- **small** \- It is a text area type that allows upto **2000** characters.
- **large** \- It is a text area type that allows upto **32000** characters.
- **rich\_text** \- It is a text area type that allows up to **50000** characters.

**Notes**

- The tooltip key only supports both the **info\_icon value** and **static\_text** value.

#### Sample Input : Field Type - Text Area

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Name",\
            "data_type": "textarea",\
            "length" : 50000,\
            "textarea": {\
                "type": "rich_text"\
            },\
            "tooltip": {\
                "name": "static_text",\
                "value": "Enter your name"\
            },\
            "profiles": [\
                {\
                    "id": "2423488000000015972",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "2423488000000015975",\
                    "permission_type": "read_write"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111112000000067259"\
            },\
            "message": "field created",\
            "status": "success"\
        }\
    ]
}
```

#### Input JSON Keys for "Email" ("data\_type": "email")

- hipaa\_compliance\_enabledboolean, optional



This key helps you decide how you want to manage and process health related data of your customers to comply with HIPAA. To use this key, please enable it through the UI. For that, Go to **Setup** \> **Security Control** \> **Compliance Setting** \> **HIPAA Compliance**.

- privateJSON object, optional



This key decide how you want to handle, manage, and process personal data of your customers to comply with GDPR for your organization. To use this key, please enable it through the UI. For that, Go to **Setup** \> **Security Control** \> **Compliance Setting** \> **GDPR Compliance**.



Possible values for the **type** : **Low** and **High**.


**Note**

- The **hipaa\_compliance\_enabled** and **private** keys support **all field data types**.

#### Sample Input: Field Type - Email

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Email address",\
            "data_type": "email", // Specify the data type as email*\
            "length": 100,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Enter email address"\
            },\
            "crypt": {\
                "mode": "decryption"\
            },\
            "unique": {\
                "case_sensitive": false\
            },\
            "hipaa_compliance_enabled": true,\
            "private": {\
                "type": "High"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Input JSON Keys for "Picklist Field" ("data\_type": "picklist"), "Multi-select Picklist Field" ("data\_type": "multiselectpicklist"), and "Global PickList Field" ("data\_type": "picklist")

For picklist field, the value of **data\_type** should be **picklist**. For multiselect picklist field, the value of **data\_type** should be **multiselectpicklist**. Refer to the sample input for more details.

- pick\_list\_valuesJSON array, mandatory



It represents the values or options of the picklist field.



  - display\_valuestring, mandatory



    The unique display value for the picklist, which will be displayed in the CRM UI.

  - actual\_valuestring, mandatory



    The unique reference value associated with the particular option.
- pick\_list\_values\_sorted\_lexicallyboolean, optional



It represents the sort order preference for the global set values.

Possible values are : **true** \- alphabetical order, **false** \- given order. The default value is **false.**

- enable\_colour\_codeboolean, optional



Specify whether to enable color for the picklist options. The default value is **false.**

- global\_picklistJSON object, optional (mandatory while associate a global picklist)



Use this key to associate a global picklist to a module.



  - idstring, mandatory



    Represents the unique ID of the global picklist. Get your **Global Picklist IDs** and other related details [here](https://www.zoho.com/crm/developer/docs/api/v7/get-global-picklist.html).

**Note**

- The tooltip key for **picklist (including global picklist),** and **multiselectpicklist** fields data type supports only **info\_icon** value.

#### Sample Input: Field Type - Picklist and Global Picklist

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Select Region",\
            "data_type": "picklist", // Specify the data type as picklist*\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Select your region here"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "pick_list_values": [\
                {\
                    "display_value": "East",\
                    "actual_value": "IN_East"\
                },\
                {\
                    "display_value": "West",\
                    "actual_value": "IN_West"\
                },\
                {\
                    "display_value": "North",\
                    "actual_value": "IN_North"\
                },\
                {\
                    "display_value": "South",\
                    "actual_value": "IN_South"\
                }\
            ],\
            "pick_list_values_sorted_lexically": true,\
            "enable_colour_code": true\
        },\
     //Associating a Global Picklist below:\
        {\
            "field_label": "Source",\
            "data_type": "picklist", // to associate a global picklist, use the data type as "picklist"\
            "global_picklist": {\
                "id": "2423488000000492003" //ID of the global picklist\
            }\
        }\
    ]
}
```

Show full

Show less

#### Sample Input: Field Type - Multi-select Picklist

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Preferred working days",\
            "data_type": "multiselectpicklist", // Specify the data type as multiselectpicklist*\
            //"length": 25,\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Select your region here"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_only"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "hidden"\
                }\
            ],\
            "pick_list_values": [\
                {\
                    "display_value": "Monday",\
                    "actual_value": "1"\
                },\
                {\
                    "display_value": "Tuesday",\
                    "actual_value": "2"\
                },\
                {\
                    "display_value": "Wednesday",\
                    "actual_value": "3"\
                },\
                {\
                    "display_value": "Thursday",\
                    "actual_value": "4"\
                },\
                {\
                    "display_value": "Friday",\
                    "actual_value": "5"\
                }\
            ],\
            "pick_list_values_sorted_lexically": true,\
            "enable_colour_code": true\
        }\
    ]
}
```

Show full

Show less

#### Field Types: "Date" ("data\_type": "date") and "DateTime" ("data\_type": "datetime")

**Note**

The tooltip key only supports the **info\_icon** value for **Date** and **DateTime** fields.

#### Sample Inputs : Field Types - Date and Date Time

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Date of birth",\
            "data_type": "date", // Specify the data type as date*\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Select date of birth"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_only"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "decryption"\
            }\
        },\
        {\
            "field_label": "Time of birth",\
            "data_type": "datetime", // Specify the data type as datetime*\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Select date of birth"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_only"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "decryption"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Sample Response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067232"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067238"\
            },\
            "message": "field created",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

Sample successful response for multiple fields creation in a single API call.

#### Input JSON Key for "Integer Field" ("data\_type": "integer")

- separatorboolean, optional



Represents whether to display the number in a formatted view for better readability, or not. The number format can be [customized](https://help.zoho.com/portal/en/kb/crm/organization-settings/personal-settings/articles/manage-account-settings#Change_Locale_Information) for each user in the Personal Settings. The default value is **true**.


**Note**

- The tooltip key supports both the **static\_text** value and **info\_icon** value.

#### Sample Input : Field Type - Integer

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Monthly salary",\
            "data_type": "integer", // Specify the data type as integer*\
            "length": 9,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Enter salary"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "unique": {\
                "case_sensitive": false\
            },\
            "crypt": {\
                "mode": "encryption"\
            },\
            "separator": true\
        }\
    ]
}
```

Show full

Show less

#### Input JSON Keys for "Auto Number" ("data\_type": "autonumber")

- auto\_numberJSON object, mandatory



Contains the details of the auto number field.



  - start\_numberinteger, mandatory



    It specifies the starting number for the auto number sequence.

  - prefixstring, optional



    It represents the prefix value to be added to the autonumber field value.

  - suffixstring, optional



    It represents the suffix value to be added to the autonumber field value.
- \_update\_existing\_recordsboolean, object



Specify whether the existing auto-number records should be replaced with new auto-numbers of the specified format or not. Default value is **false**.


**Note**

- The tooltip key for **autonumber** field supports only the **info\_icon** value.

#### Sample Input: Field Type - Auto Number

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Employee Identification number",\
            "data_type": "autonumber", // Specify the data type as autonumber*\
            "length": 255,\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Your Employee ID"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "auto_number": {\
                "start_number": 1000,\
                "prefix": "Emp",\
                "suffix": "_IN"\
            },\
            "_update_existing_records": false\
        }\
    ]
}
```

Show full

Show less

#### Input JSON Keys for "Formula" ("data\_type": "formula")

- formulaJSON object, mandatory



Contains the details of the formula field, including the return type and the expression.



- return\_typestring, optional



Specify the return type for the formula field. Possible values are : **double, currency, text, date, datetime, and boolean.**

- expressionstring, mandatory



Specify the formula expression. Please refer [here](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/create-formula-fields) to learn more about formula expressions, and how to draft them.


- decimal\_placeinteger, optional



The number of decimal places for the formula field. This is valid for **double** and **currency** return types. Possible values are from **0 to 9**, both inclusive.

- number\_separatorboolean, optional



Specify whether to display the field value in formatted view. The default value is **true**.


**Note**

- The Formula field supports only the **info\_icon** value for the **tooltip key**.

#### Sample Input: Field Type: Formula

``` json
Copied{
  "fields": [\
    {\
      "field_label": "Formula Decimal",\
      "data_type": "formula",\
      "length": "100000000",\
      "profiles": [\
        {\
          "id": "2309216000000015972",\
          "permission_type": "read_write"\
        }\
      ],\
\
      "formula": {\
        "return_type": "double",\
        "expression": "Sqrt(Len(${Email}))"\
      },\
      "decimal_place": 7,\
      "number_separator": true\
    }\
  ]
}
```

#### Input JSON Keys for "Currency" ("data\_type": "currency")

- currencyJSON object, mandatory



The object containing the currency specific details for the field.



  - rounding\_optionstring, mandatory



    Specify the rounding option for the currency field.



    Possible [rounding options](https://help.zoho.com/portal/en/kb/crm/customize-crm-account/customizing-fields/articles/types-of-fields#Currency_Fields):



- **normal** \- No rounding operations involved.
- **round\_off** \- Rounds the decimal part to the nearest whole number based on the specified **precision**.

For example, for a decimal\_value of 3 and precision 2:

1234.567 rounds down to 1234.57

1234.123 rounds down to 1234.12
- **round\_up** \- **Rounds** the decimal part **up** to the nearest whole number based on the specified **precision**.

For example, for a decimal\_value of 2 and precision 2:

1234.567 rounds down to 1234.57

1234.123 rounds down to 1234.13
- **round\_down** \- **Rounds** the decimal part **down** the nearest whole number based on the specified **precision**.

For example, for a decimal\_value of 2 and precision 2:

1234.567 rounds down to 1234.56

1234.123 rounds down to 1234.12

  - precisioninteger, optional



    Represents the number of decimal places displayed for the currency value in the **user interface**. This value should be less than **decimal\_place**

    Example: Currency value: **$123.466**, the precision value is set to **2**, the final currency value will be **$123.47**. (Note: "rounding\_option" : " **round\_up**").
- decimal\_placeinteger, optional



Defines the **maximum** numberof **decimal places** allowed for storing currency values in the field. This value cannot exceed 9. Values exceeding the set **decimal\_place** will be truncated during storage.


**Notes**

- The filterable key is not supported for the **formula** datatype when its **return\_type** is **text**.
- The **precision** value for currency should be less than the **decimal\_place**.
- The tooltip key supports only the **info\_icon** value.
- Maximum value for **decimal\_place** is **9**.

#### Sample Input: Field Type: Currency

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Bonus",\
            "data_type": "currency", // Specify the data type as currency*\
            "length": 16,\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Bonus Amount"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "encryption"\
            },\
            "decimal_place": 5,\
            "currency": {\
                "rounding_option": "round_up",\
                "precision": 3\
            }\
        }\
    ]
}
```

#### Field Types: Percent, BigInt, Double, Website, and Boolean

**Notes**

- The data types **Percent, Big Int, Double, Boolean,** and **Website** support both the **static\_text** and **info\_icon** values for the **tooltip** key.
- Ensure that the decimal value is less than the provided length value in the input.

#### Sample Inputs : Field Types: Percent, BigInt, Double, Website, and Boolean

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Percent marks in qualifying exam",\
            "data_type": "percent", // Specify the data type as percent*\
            "length": 5,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Your marks"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ]\
        },\
        {\
            "field_label": "Enrollment number",\
            "data_type": "bigint", // Specify the data type as bigint*\
            "length": 18,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Enrollment no."\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "decryption"\
            },\
            "separator": true\
        },\
        {\
            "field_label": "annualrevenue",\
            "data_type": "double", // Specify the data type as double*\
            "length": 16,\
            "tooltip": {\
                "name": "static_text",\
                "value": "annual revenue"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "decryption"\
            },\
            "separator": true,\
            "decimal_place": 9\
        },\
        {\
            "field_label": "Website",\
            "data_type": "website", // Specify the data type as website*\
            "length": 450,\
            "tooltip": {\
                "name": "static_text",\
                "value": "Your Website"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ],\
            "crypt": {\
                "mode": "decryption"\
            }\
        },\
        {\
            "field_label": "Prefer to work overseas?",\
            "data_type": "boolean", // Specify the data type as boolean*\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Prefer to work overseas?"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                },\
                {\
                    "id": "111116000000000423",\
                    "permission_type": "read_only"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

A Maximum of _**5 fields**_ can be created in a single API call.

#### Sample Response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067722"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067728"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067734"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067740"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067761"\
            },\
            "message": "field created",\
            "status": "success"\
        }\
    ]
}
```

Show full

Show less

#### Field Types: "File Upload" ("data\_type": "fileupload") and "Image Upload" ("data\_type": "imageupload")

**Notes**

- The data types **File Upload** and **Image Upload** support only the **info\_icon** value for the **tooltip** key.
- The length of the file upload data type should either be **1** or **5**.
- The image upload data type allows for a maximum of **10** images.

#### Sample Inputs : Field Types: File Upload, and Image Upload

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Upload Files",\
            "data_type": "fileupload",    // Specify the data type as fileupload*\
            "length": 5, //"length" : 1 or 5\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Upload Files"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                }\
            ]\
        },\
        {\
            "field_label": "Image Upload",\
            "data_type": "imageupload",  // Specify the data type as imageupload*\
            "length": 5, // "length" : 1 to 10\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Upload Files"\
            },\
            "profiles": [\
                {\
                    "id": "111116000000000421",\
                    "permission_type": "read_write"\
                }\
            ]\
        }\
    ]
}
```

Show full

Show less

#### Input JSON Keys for "Lookup Field" ("data\_type": "lookup")

- lookupJSON object, mandatory



Lookup fields allows you to associate records from different modules with your current module. The **lookup** JSON object contains the details of the field being created.



  - modulestring, mandatory



    Specify the module API name of the module to be associated via the lookup field. Use the [Modules API](https://www.zoho.com/crm/developer/docs/api/v7/module-meta.html) to get the module API names.
- display\_labelstring, mandatory



It represents the display label of the lookup field in the related list.

- revalidate\_filter\_during\_editboolean , optional



Specify whether to revalidate the filters during **edit**. When the value is set to true, the pre-defined condition with the lookup filter will be checked during record creation and updation.

- query\_detailsJSON object , optional



Specify the criteria for filtering the records in the lookup field.



  - criteriaJSON object , mandatory when the query\_details JSON object is specified



    It represents the criteria for filtering records.

  - group\_operatorstring , optional (it is mandatory to specify when there are more than one condition)



    Specifies the group operator used in the criteria (e.g., AND, OR).

  - groupJSON array



    It represents the group of criteria for filtering records.



    - fieldJSON object



      It represents the API name of the field in the target module.

    - comparatorstring



      It represents the comparison operator used in the criterion (e.g., contains and not\_equal).

    - valuestring



      It represents the value used in the criterion. Check the sample input section for reference.

#### Input JSON Keys for "User Lookup" ("data\_type": "userlookup")

- sharing\_propertiesJSON object, optional



Specify if the user has access to the records that the field associates to.



  - share\_preference\_enabledboolean, mandatory (It is mandatory when the "sharing\_properties" JSON object is specified)



    It represents whether share preferences are enabled (true), or disabled (false) for the field.

  - share\_permissionboolean, mandatory (It is mandatory when the "sharing\_properties" JSON object is specified)



    It represents the sharing permission for the field.

    **Possible values:**



- full-access
- read-write
- read-only

**Notes**

- The **Lookup** data type supports both the **info\_icon** and **static\_text** values for the tooltip key.
- The **User Lookup** data type supports only the **info\_icon** value for the tooltip key.

#### Sample Input : Field Types - Lookup, and User Lookup

``` json
Copied{
    "fields": [\
        {\
            "field_label": "Contact Lookup",\
            "data_type": "lookup",   // Specify the data type as lookup*\
            "tooltip": {\
                "name": "static_text",\
                "value": "Linked Lead"\
            },\
            "lookup": {\
                "module": {\
                    "id": "111116000000002399",\
                    "api_name": "Contacts"\
                },\
                "display_label": "Contact Lookup",\
                "revalidate_filter_during_edit": true,\
                "query_details": {\
                    "criteria": {\
                        "group_operator": "AND",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "Employee_Identification_number"\
                                },\
                                "comparator": "contains",\
                                "value": "Emp1000_IN"\
                            },\
                            {\
                                "field": {\
                                    "api_name": "Lead_Source"\
                                },\
                                "comparator": "equal",\
                                "value": [\
                                    "Advertisement",\
                                    "OnlineStore",\
                                    "Partner"\
                                ]\
                            },\
                            {\
                                "field": {\
                                    "api_name": "Phone"\
                                },\
                                "comparator": "contains",\
                                "value": "91"\
                            }\
                        ]\
                    }\
                }\
            }\
        },\
        {\
            "field_label": "UserLink",\
            "data_type": "userlookup",  // Specify the data type as userlookup*\
            "tooltip": {\
                "name": "info_icon",\
                "value": "Linked user"\
            },\
            "lookup": {\
                "revalidate_filter_during_edit": true,\
                "query_details": {\
                    "criteria": {\
                        "group_operator": "AND",\
                        "group": [\
                            {\
                                "field": {\
                                    "api_name": "city"\
                                },\
                                "comparator": "equal",\
                                "value": "Chennai"\
                            },\
                            {\
                                "field": {\
                                    "api_name": "country"\
                                },\
                                "comparator": "equal",\
                                "value": [\
                                    "India",\
                                    "China",\
                                    "Japan"\
                                ]\
                            },\
                            {\
                                "field": {\
                                    "api_name": "mobile"\
                                },\
                                "comparator": "contains",\
                                "value": "91"\
                            },\
                            {\
                                "field": {\
                                    "api_name": "email"\
                                },\
                                "comparator": "contains",\
                                "value": "gmail"\
                            }\
                        ]\
                    }\
                }\
            },\
            "sharing_properties": {\
                "share_preference_enabled": true,\
                "share_permission": "read-only"\
            }\
        }\
    ]
}
```

Show full

Show less

#### Possible Errors

- INVALID\_DATAHTTP 400



- Given data seems to be invalid
- The given profile ID seems to be invalid

**Resoutions:**

- Specify a valid data in the input. Please refer above to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Input_JSON_Keys).
- Specify a valid profile ID.

- DEPENDENT\_MISMATCHHTTP 400



- The given length value seems to be invalid.
- The dependent fields seems to be invalid or missing

**Resolutions:**

- The value given in the length attribute is invalid, or the value is larger than the actual limit. Please refer to the [Field Types: Data Types and Length Limits](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Field_Types) to know more about the limits.
- Specify all required valid dependent fields along with their corresponding values.

- LIMIT\_EXCEEDEDHTTP 400



The field has reached its maximum creation limit

**Resolution:**



You have already created the maximum possible custom fields. Please refer [here](https://www.zoho.com/crm/help/complete-feature-list.html) to know about the limits in detail.

- DEPENDENT\_FIELD\_MISSINGHTTP 400



One or more dependent fields are missing

**Resolution:** Specify all the dependent fields in the input body. Please refer above to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Input_JSON_Keys).

- EXPECTED\_FIELD\_MISSINGHTTP 404



One or more expected fields missing

**Resolution:** Specify the dependent keys of a field. Refer above to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Input_JSON_Keys).

- AMBIGUITY\_DURING\_PROCESSINGHTTP 400



- The ID given in the request body does not belong to the respective module which you are trying to create.
- Cannot provide both picklist options and global set

**Resolutions:**

- Specify the required field with its valid module API name and ID.
- Please specify the global picklist JSON object. You cannot simultaneously provide both the picklist options JSON array and the global picklist JSON object.

- EXPECTED\_DEPENDENT\_FIELD\_MISSINGHTTP 400



Either global\_picklist or picklist values is expected

**Resolution:**



Provide dependent fields to create a picklist or global picklist field in a layout. Refer to the [Create Custom Field API](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html) for more information.

- DUPLICATE\_DATAHTTP 400



- Duplicate field label
- Duplicate display\_value has been found among the picklist options
- Duplicate API name has been found for a field creation

**Resolutions:**

- The field label seems to be a duplicate. Specify a unique field label.
- One or more picklist option values have been found to be the same. Please specify a unique display value.
- Specify a unique API name for a field.

- MANDATORY\_NOT\_FOUNDHTTP 400



Required fields not found

**Resolution:** One or more mandatory fields are missing for the fields you are trying to create. Please refer above to the [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Input_JSON_Keys).

- RESERVED\_KEYWORD\_NOT\_ALLOWEDHTTP 400



System-defined keywords not allowed in the API name

**Resolution:** Specify a non-system-defined keyword for the API name.

- NOT\_ALLOWEDHTTP 400



The filterable key is not allowed for the field datatype you create.

**Resolution:** Specify the filterable key only for the supported datatypes. The following datatypes do not support the filterable key: **textarea, imageupload,** and **fileupload.**

- NOT\_ALLOWEDHTTP 400



External field is not allowed for module Calls.

- REQUIRED\_PARAM\_MISSINGHTTP 400



Required parameter is missing



**Resolution:** Please specify the **module** parameter and its corresponding value.

- INVALID\_REQUEST\_METHODHTTP 400



The http request method type is not a valid one

**Resolution:** You have specified an invalid HTTP method to access the API URL. Specify a valid request method. Refer to the endpoints section above.

- OAUTH\_SCOPE\_MISMATCHHTTP 401



Unauthorized

**Resolution:** The client does not have a valid scope to create custom fields. Create a new token with valid scope. Refer to scope section above.

- AUTHENTICATION\_FAILUREHTTP 401



Authentication failed

**Resolution:** Pass the access token in the request header of the API call.

- NOT\_SUPPORTEDHTTP 403



Encryptions is not supported for the requested data type

**Resolution:**



The requested field type is not supported for the crypt key. Please specify the allowed field data types. Please refer the crypt key in the above [Input JSON Keys](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#Input_JSON_Keys) to know the allowed field data types.

- INVALID\_URL\_PATTERNHTTP 404



Please check if the URL trying to access is a correct one

**Resolution:** The request URL specified is incorrect. Specify a valid request URL. Refer to the request URL section above.

- INTERNAL\_ERRORHTTP 500



Internal Server Error

**Resolution:** Unexpected and unhandled exception in the server. Contact support team.


#### Sample Response

``` json
Copied{
    "fields": [\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067321"\
            },\
            "message": "field created",\
            "status": "success"\
        },\
        {\
            "code": "SUCCESS",\
            "details": {\
                "id": "111116000000067241"\
            },\
            "message": "field created",\
            "status": "success"\
        }\
    ]
}
```

© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.

[Top](https://www.zoho.com/crm/developer/docs/api/v7/create-custom-field.html#top)

- [API Directory](https://www.zoho.com/crm/developer/docs/api-directory.html?source_from=qlink_)
- [Postman Collection](https://www.postman.com/zohocrmdevelopers/workspace/zoho-crm-developers/overview?source_from=qlink_)
- [Kaizen Series](https://www.zoho.com/crm/developer/docs/kaizen-series-directory.html?source_from=qlink_)