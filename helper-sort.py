# A data-management utility to sort a JSON of members by last name, and print the result.

import yaml # YAML is a superset of JSON, and more forgiving to errors
import json

member_list = """
  PASTE THE JSON LIST OF MEMBERS HERE
"""

records = yaml.safe_load(member_list)

# sort by the last word of the name
records = sorted(records, key=lambda d: d['name'].split()[-1])

# print JSON-formatted output
print(json.dumps(records, indent=2))