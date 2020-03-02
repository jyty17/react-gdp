import pandas as pd
import csv
df = pd.read_csv('gdp.csv', quotechar='"', sep=",")
column = df.columns

from sqlalchemy import create_engine
engine = create_engine('postgresql://Jerry@localhost:5432/gdp')

df.to_sql(name='accounts', con=engine)