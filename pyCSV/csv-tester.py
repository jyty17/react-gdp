import pandas as pd
import csv
# df = pd.read_csv('gdp.csv', quotechar='"', sep=",")
# column = df.columns

# countries = pd.read_csv('countries.csv', sep='[:|,]', engine='python')
countries = pd.read_table('countries.csv', sep='|')

from sqlalchemy import create_engine
engine = create_engine('postgresql://Jerry@localhost:5432/gdp')

# df.to_sql(name='countries', con=engine)

countries.to_sql(name='countries', con=engine)

print(countries)